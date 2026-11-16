export default function UserProfile({ user }) {
    return (
        <div style={{
            backgroundColor: "lightblue",
            padding: "20px",
            margin: "10px",
            borderRadius: "10px"
        }}>
            <h2 style={{ color: "blue" }}>
                User Profile
            </h2>

            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
            <p>Company: {user.company}</p>
        </div>
    );
}