export type Props = {
    error: any;
    resetErrorBoundary: any;
};

const ErrorFallback: React.FC<Props> = ({ error, resetErrorBoundary }) => {
    // console.log(error);
    if (error?.response?.status >= 400 && error?.response?.status < 500) {
        return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre>Client Error</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        );
    }

    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>Non-Network Error</pre>
            {/* <pre>{error.message}</pre> */}
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

export default ErrorFallback;
