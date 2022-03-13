import React, {useEffect, useState} from "react";
import useInterval from "@use-it/interval";
import LoadingIcon from "./LoadingIcon";
import axios from "axios";
import "./Metrics.css";

const Metrics = () => {

    const [metrics, setMetrics] = useState();
    const [loading, setLoading] = useState(false);
    const fetchMetrics = async () => {
        let config = {
            headers: {
                "Authorization": "mysecrettoken"
            }
        };

        setLoading(true);
        await axios.get("http://localhost:8081/metrics", config)
            .then(r => setMetrics(r.data))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchMetrics();
    }, []);

    useInterval(() => {
        fetchMetrics();
    }, 30000);

    return (
        <div>
            <h5>Metrics</h5>
            {loading && <LoadingIcon />}
            <div className="code-block">
                <pre>{metrics}</pre>
            </div>
        </div>
    );
};

export default Metrics;
