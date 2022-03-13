import React, {useEffect, useState} from "react";
import axios from "axios";
import useInterval from "@use-it/interval";
import LoadingIcon from "./LoadingIcon";

const Time = () => {

    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState();

    const [seconds, setSeconds] = useState(0);
    const incrementSeconds = () => {
        setSeconds(seconds => {
            return seconds + 1;
        });
    }

    const fetchTime = async () => {
        let config = {
            headers: {
                "Authorization": "mysecrettoken"
            }
        };

        setLoading(true);
        await axios.get("http://localhost:8081/time", config)
            .then(r => {
                setTime(r.data.epoch);
                setSeconds(0);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const interval = setInterval(incrementSeconds, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [time])

    useEffect(() => {
        fetchTime();
    }, []);

    useInterval(() => {
        fetchTime();
    }, 30000);

    const formatTime = () => {
        let hours   = Math.floor(seconds / 3600);
        let minutes = Math.floor(seconds / 60) % 60;
        let secs = seconds % 60;
        return [hours, minutes, secs]
            .map(v => v.toString().padStart(2, '0'))
            .join(':');
    }

    return (
        <div>
            {time && (
                <div>
                    Most Recent Server Time: {Math.floor(time / 1000)}
                </div>
            )}
            <div>{formatTime()}</div>
            {loading && (
                <LoadingIcon />
            )}
        </div>
    );
};

export default Time;