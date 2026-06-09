const form = document.getElementById("surveyForm");

let DataSurvey = JSON.parse(localStorage.getItem("data-survey")) || [];

// Submit Event
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Input Text
    const fieldName = document.querySelector('input[name="nama"]').value.trim();
    const fieldAge = document.querySelector('input[name="umur"]').value;

    // Radio Button
    const fieldGender =
        document.querySelector('input[name="gender"]:checked')?.value || "";

    const fieldPerokok =
        document.querySelector('input[name="perokok"]:checked')?.value || "";

    // Checkbox
    const fieldJenisRokok =
        document.querySelectorAll('input[name="jenis_rokok"]:checked');

    const jenisRokok = Array.from(fieldJenisRokok).map((checkbox) => checkbox.value);

    // Object Data
    const currentUserData = {
        fullname: fieldName,
        umur: Number(fieldAge),
        gender: fieldGender,
        perokok: fieldPerokok,
        jenisRokok: jenisRokok
    };

    // Tambah ke array
    DataSurvey.push(currentUserData);

    localStorage.setItem("data-survey", JSON.stringify(DataSurvey));

    // console.log("Data Survey:", DataSurvey);
    alert("Data berhasil disimpan!");
    form.reset();
});