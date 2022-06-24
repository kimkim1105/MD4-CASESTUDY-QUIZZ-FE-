let show = document.getElementById("display");

$(document).ready(function () {
    findAll();
})

function findAll() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/tests",
        success: function (test) {
            let content = `<thead>
    <tr>
        <th>Name</th>
        <th>User</th>
        <th>Level</th>
        <th>Date</th>
        <th>Actions</th>
    </tr>
    </thead>`;
            for (let i = 0; i < test.length; i++) {
                content += `<tbody>
                <tr>
                <td>${test[i].name}</td>
                <td>${test[i].user.name}</td>
                <td>${test[i].level.name}</td>
                <td>${test[i].date}</td>
                <td>
                      <td><button id="doquizz" onclick="">DO QUIZZ</button></td
<!--                    <a href="#" className="btn btn-success" data-toggle="modal"><span>Do Quizz</span></a>-->
                </td>
                </tr>
                </tbody>`;}
            show.innerHTML = content;
        }
    });
}


