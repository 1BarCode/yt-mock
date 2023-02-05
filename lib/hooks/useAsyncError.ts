import { useCallback, useState } from "react";

/**
 * This hook is used to throw an error in the catch block of async errors so Error Boundaries can catch that error.
 * @returns A function to throw the error during render and commit phase of React
 */
const useAsyncError = () => {
    const [, setError] = useState();

    const throwError = useCallback(
        (e: any) => {
            setError(() => {
                throw e;
            });
        },
        [setError]
    );

    return throwError;
};

export default useAsyncError;
