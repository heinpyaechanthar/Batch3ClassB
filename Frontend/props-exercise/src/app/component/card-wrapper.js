export default function CardWrapper({ children }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "20px",
                margin: "15px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}
        >
            {children}
        </div>
    );
}