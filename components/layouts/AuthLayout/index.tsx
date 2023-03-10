export type Props = {
    children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            {children}
        </div>
    );
};

export default AuthLayout;
