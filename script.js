document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Construct a message that includes the personal information
    const content = `
        Personal Information:
        Name: ${data.name}
        Email: ${data.email}
        Age: ${data.age}
        Location: ${data.location}
        Occupation: ${data.occupation}

        Survey Responses:
        Knowledge: ${data.knowledge}
        Air Quality: ${data.airQuality}
        Daily Impact: ${data.dailyImpact}
        Air Quality Notice: ${data.airQualityNotice}
        Wildlife Activity: ${data.wildlifeActivity}
        Consumption Habits: ${data.consumptionHabits}
        Sustainable Practices: ${data.sustainablePractices}
        Green Spaces: ${data.greenSpaces}
        Water Bodies: ${data.waterBodies}
        Plastic Waste: ${data.plasticWaste}
        Problems: ${data.problems}
        Economic Impact: ${data.economicImpact}
        Environmental Change: ${data.environmentalChange}
    `;

    const webhookUrl = 'https://discord.com/api/webhooks/1301454754291126286/BVk11BwxEN6nSdZJ0m-eaaF4OaJG2Jo3vFO-__D1YRfPBXUmfJ76niuxAcZjL6qo4LN6';

    fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('successMessage').classList.remove('hidden');
            this.reset(); // Reset the form
        } else {
            console.error('Error sending data:', response.statusText);
        }
    })
    .catch(error => console.error('Error:', error));
});
