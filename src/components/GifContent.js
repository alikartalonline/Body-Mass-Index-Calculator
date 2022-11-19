import React, { useEffect } from 'react';

function GifContent({
    bmi, resultGif, gifZ, gifN, gifF, gifS, gifAS,
    setResultGif, setGifZ, setGifN, setGifF, setGifS, setGifAS
}) {


    let bmiGifFix = bmi.toFixed(2)

    useEffect(() => {
        if (bmiGifFix >= 0 && bmiGifFix <= 18.4) {
            return setResultGif("gifZ")
        }
        else if (bmiGifFix >= 18.5 && bmiGifFix <= 24.9) {
            return setResultGif("gifN")
        }
        else if (bmiGifFix >= 25 && bmiGifFix <= 29.9) {
            return setResultGif("gifF")
        }
        else if (bmiGifFix >= 30 && bmiGifFix <= 44.9) {
            return setResultGif("gifS")
        }
        else if (bmiGifFix > 45) {
            return setResultGif("gifAS")
        }

    }, [bmiGifFix, setResultGif])

    useEffect(() => {
        if (resultGif === "gifZ") {
            return setGifZ("gifZ1")
        }
        else if (resultGif === "gifN") {
            return setGifN("gifN1")
        }
        else if (resultGif === "gifF") {
            return setGifF("gifF1")
        }
        else if (resultGif === "gifS") {
            return setGifS("gifS1")
        }
        else if (resultGif === "gifAS") {
            return setGifAS("gifAS1")
        }
    }, [resultGif])

    const changeGifZ = () => {
        if (gifZ === "gifZ1") {
            setTimeout(() => {
                setGifZ("gifZ2")
            }, 3000)
        } else if (gifZ === "gifZ2") {
            setTimeout(() => {
                setGifZ("gifZ3")
            }, 3000)
        } else if (gifZ === "gifZ3") {
            setTimeout(() => {
                setGifZ("gifZ1")
            }, 3000)
        }
    };

    const changeGifN = () => {
        if (gifN === "gifN1") {
            setTimeout(() => {
                setGifN("gifN2")
            }, 3000)
        } else if (gifN === "gifN2") {
            setTimeout(() => {
                setGifN("gifN3")
            }, 3000)
        } else if (gifN === "gifN3") {
            setTimeout(() => {
                setGifN("gifN1")
            }, 3000)
        }
    };


    const changeGifF = () => {
        if (gifF === "gifF1") {
            setTimeout(() => {
                setGifF("gifF2")
            }, 4000)
        } else if (gifF === "gifF2") {
            setTimeout(() => {
                setGifF("gifF1")
            }, 4000)
        }
    };

    const changeGifS = () => {
        if (gifS === "gifS1") {
            setTimeout(() => {
                setGifS("gifS2")
            }, 3000)
        } else if (gifS === "gifS2") {
            setTimeout(() => {
                setGifS("gifS3")
            }, 3000)
        } else if (gifS === "gifS3") {
            setTimeout(() => {
                setGifS("gifS1")
            }, 3000)
        }
    };

    const changeGifAS = () => {
        if (gifAS === "gifAS1") {
            setTimeout(() => {
                setGifAS("gifAS2")
            }, 3000)
        } else if (gifAS === "gifAS2") {
            setTimeout(() => {
                setGifAS("gifAS3")
            }, 3000)
        } else if (gifAS === "gifAS3") {
            setTimeout(() => {
                setGifAS("gifAS1")
            }, 3000)
        }
    };




    return (
        <div>
            {
                resultGif === "gifZ" ? changeGifZ() : resultGif === "gifN" ? changeGifN() :
                    resultGif === "gifF" ? changeGifF() : resultGif === "gifS" ? changeGifS() :
                        resultGif === "gifAS" ? changeGifAS() : null
            }

            {
                gifZ === "gifZ1" ?
                    <img src="assets/z1.gif" alt="alikartalonline" height={200} width={210} /> :
                    gifZ === "gifZ2" ?
                        <img src="assets/z2.gif" alt="alikartalonline" height={200} width={210} /> :
                        gifZ === "gifZ3" ?
                            <img src="assets/z3.gif" alt="alikartalonline" height={200} width={210} /> : null
            }

            {
                gifN === "gifN1" ?
                    <img src="assets/n1.gif" alt="alikartalonline" height={200} width={210} /> :
                    gifN === "gifN2" ?
                        <img src="assets/n2.gif" alt="alikartalonline" height={200} width={210} /> :
                        gifN === "gifN3" ?
                            <img src="assets/n3.gif" alt="alikartalonline" height={200} width={210} /> : null
            }

            {
                gifF === "gifF1" ?
                    <img src="assets/f1.gif" alt="alikartalonline" height={200} width={210} /> :
                    gifF === "gifF2" ?
                        <img src="assets/f2.gif" alt="alikartalonline" height={200} width={210} /> : null
            }

            {
                gifS === "gifS1" ?
                    <img src="assets/s1.gif" alt="alikartalonline" height={200} width={210} /> :
                    gifS === "gifS2" ?
                        <img src="assets/s2.gif" alt="alikartalonline" height={200} width={210} /> :
                        gifS === "gifS3" ?
                            <img src="assets/s3.gif" alt="alikartalonline" height={200} width={210} /> : null
            }


            {
                gifAS === "gifAS1" ?
                    <img src="assets/as.gif" alt="alikartalonline" height={200} width={210} /> :
                    gifAS === "gifAS2" ?
                        <img src="assets/h1.gif" alt="alikartalonline" height={200} width={210} /> :
                        gifAS === "gifAS3" ?
                            <img src="assets/w1.gif" alt="alikartalonline" height={200} width={210} /> : null
            }

        </div>
    )
};

export default GifContent;