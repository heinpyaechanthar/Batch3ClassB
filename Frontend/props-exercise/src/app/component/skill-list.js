export default function SkillList({ skills }) {
    return (
        <div style={{
            backgroundColor: "lightyellow",
            padding: "20px",
            margin: "10px",
            borderRadius: "10px",
            color:"red"
        }}>
            <h2>My Skills</h2>

            <ul>
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        style={{
                            color: "green",
                            margin: "10px"
                        }}
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}