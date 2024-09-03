function skillsMember() {
    let member = this;
    member.skills = ['JavaScript', 'React', 'Node'];
    member.showSkills = function() {
        member.skills.forEach((skill) => {
            console.log(`${member.name} knows ${skill}`);
        });
    };
}