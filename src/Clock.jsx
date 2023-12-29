import React, { useEffect, useState } from "react";

export const Clock = ({ user }) => {
    const [date, setDate] = useState(new Date());


    const ejecutar = async () => {
        const operation = new Promise((resolve, reject) => {
            const result = true;
            setTimeout(() => {
                if (result) {
                    resolve("Operacion exitosa");
                } else {
                    reject("Operacion fracasó");
                }
            }, 2000)
        })
        console.log('procesando informacion...');
        operation.then((m) => console.log(m)).catch(e => console.log(e))
    }

    useEffect(() => {


        ejecutar();

        const timerID = setInterval(
            () => tick(),
            1000
        );
        return () => {
            clearInterval(timerID);
        }
    })

    const tick = () => {
        setDate(new Date());
    }
    return (
        <div>
            <h1>Hello World</h1>
            <h2>It is{date.toLocaleTimeString()}</h2>
        </div>
    )


}

