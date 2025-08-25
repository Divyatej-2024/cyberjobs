const app_id = "a3d36a91";  
const app_key = "2bfdf5892ed5e0aa84ae59dd76c6f2a0";  

async function fetchJobs() {
  const query = document.getElementById("search").value || "cyber security";
  const url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=10&what=${query}&content-type=application/json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    let jobList = "";
    data.results.forEach(job => {
      jobList += `
        <div class="job">
          <h3><a href="${job.redirect_url}" target="_blank">${job.title}</a></h3>
          <p>${job.company.display_name} - ${job.location.display_name}</p>
          <p><strong>£${job.salary_min || "N/A"} - £${job.salary_max || "N/A"}</strong></p>
          <p>${job.description.slice(0, 200)}...</p>
        </div>
      `;
    });

    document.getElementById("jobs").innerHTML = jobList;
  } catch (err) {
    document.getElementById("jobs").innerHTML = "Error loading jobs.";
    console.error(err);
  }
}
