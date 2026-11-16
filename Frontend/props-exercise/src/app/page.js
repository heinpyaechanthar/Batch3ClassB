"use client";

import UserProfile from "./component/user-profile";
import SkillList from "./component/skill-list";
import CustomButton from "./component/custom-button";
import CardWrapper from "./component/card-wrapper";

export default function Home() {

    const user = {
        name: "Hein Pyae",
        role: "Frontend Developer",
        company: "Google"
    };

    const skills = [
        "React",
        "Next.js",
        "JavaScript",
        "Node.js"
    ];

    function handleClick() {
        alert("Hire button clicked!");
    }

      function handleClick() {
        alert("Hire button clicked!");
    }

    return (
        <div>
            <UserProfile user={user} />

            <SkillList skills={skills} />

            <h1>My Portfolio</h1>

            <CardWrapper>
                <h2>My Profile</h2>
                <p>Name: Hein Pyae</p>
                <p>Role: React Developer</p>
                <CustomButton onClick={handleClick} />
            </CardWrapper>

            <CardWrapper>
                <h2>My Skills</h2>
                <p>HTML, CSS, JavaScript, React</p>
            </CardWrapper>

        </div>
    );
}