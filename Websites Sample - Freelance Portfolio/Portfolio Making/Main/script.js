document.addEventListener("DOMContentLoaded", function () {
    function showProjectDetails(projectId) {
        const projectDetails = document.getElementById("project-details");
        const projectInfo = document.getElementById("project-info");

        const projectContent = {
            portfolio: `
                <h3>Portfolio Website</h3>
                <img src="PORTFOLIO.jpg" alt="Portfolio Website">
                <p>A personal website showcasing my skills, projects, and experience.</p>
            `,
            simple: `
                <h3>Simple Website</h3>
                <img src="SIMPLE-WEBSITE.jpg" alt="Simple Website">
                <p>A clean, minimalistic website built for practice.</p>
            `,
            resume: `
                <h3>Resume Website</h3>
                <img src="RESUME.jpg" alt="Resume Website">
                <p>An interactive resume presented in a modern web format.</p>
            `,
        };

        projectInfo.innerHTML = projectContent[projectId] || "<p>No details available.</p>";

        projectDetails.classList.remove("hidden");
        projectDetails.classList.add("show");
    }

    function closeProjectDetails() {
        const projectDetails = document.getElementById("project-details");
        projectDetails.classList.remove("show");
        projectDetails.classList.add("hidden");
    }

    document.getElementById("project-details").addEventListener("click", function (event) {
        if (!event.target.closest(".project-content")) {
            closeProjectDetails();
        }
    });

    window.showProjectDetails = showProjectDetails;
    window.closeProjectDetails = closeProjectDetails;
});
