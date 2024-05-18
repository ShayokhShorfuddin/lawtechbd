content = `
      <div class="container">
        <div class="overflow-auto mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ক্রমিক</th>
                <th scope="col">মামলার ধরণ</th>
                <th scope="col">আইন</th>
                <th scope="col">মামলা নং</th>
                <th scope="col">পরবর্তী তারিখ</th>
                <th scope="col">ধার্য বিষয়</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">১</th>
                <td>জামিন আবেদন</td>
                <td>নারী ও শিশু নির্যাতন দমন আইন</td>
                <td>২৩/২০২৪</td>
                <td>২১ মে ২০২৪</td>
                <td>শুনানী</td>
              </tr>

              <tr>
                <th scope="row">২</th>
                <td>আরজি দাখিল</td>
                <td>অর্থ ঋণ আদালত আইন</td>
                <td>১৮৮/২০২৪</td>
                <td>২৩ মে ২০২৪</td>
                <td>জবাব দাখিল</td>
              </tr>

              <tr>
                <th scope="row">৩</th>
                <td>টাইম পিটিশন</td>
                <td>নারী ও শিশু নির্যাতন দমন আইন</td>
                <td>২৩/২০২৪</td>
                <td>২৫ মে ২০২৪</td>
                <td>শুনানী</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
`;

// Make content appear/disappear when an option in draft select gets selected
function handleContent(select) {
  // Getting the draft-cases section
  const draftCasesSection = document.getElementById("draft-cases");

  // Deciding when to display the draft cases
  if (select.value == "2024") {
    draftCasesSection.innerHTML = content;
  }

  if (select.value == "Draft History") {
    draftCasesSection.innerHTML = "";
  }
}
