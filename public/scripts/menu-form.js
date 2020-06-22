$(document).ready(function () {
  var addButton = $('.add_button') //Add button selector
  var wrapper = $('.field_wrapper') //Input field wrapper

  //Once add button is clicked
  $(addButton).click(function (e) {
    //Check maximum number of input fields
    e.preventDefault()

    $(wrapper).append(
      `<div>
        <a href="#" class="remove_field" style="text-decoration:none;">❌</a>
        <div>
          <label for="company">Company:</label>
          <input type="text" class="form-control" placeholder="Company Name" name="company[]" required />
        </div> 
        <br>
        <div class="form-group">
          <label for="position">Role:</label>
          <input type="text" class="form-control" id="position" placeholder="Enter your job role" name="position[]" required />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="startDate">From:</label>
            <input type="date" name="startDate[] " class="form-control" id="startDate" required />
          </div>
          <div class="form-group col-md-6">
            <label for="endDate">To:</label>
            <input type="date" name="endDate[]" class="form-control" id="endDate" required />
          </div>
        </div>
        <div class="form-group">
          <label for="workSummary">Job Description:</label>
          <textarea class="form-control" id="workSummary" placeholder="Enter your job description" name="workSummary[]" required></textarea>
        </div>
      </div>`
    )
  })

  //Once remove button is clicked
  $(wrapper).on('click', '.remove_field', function (e) {
    e.preventDefault()
    $(this).parent('div').remove() //Remove field html
  })
  var addButton1 = $('.add_button1') //Add button selector
  var wrapper1 = $('.field_wrapper1') //Input field wrapper

  //Once add button is clicked
  $(addButton1).click(function (e) {
    //Check maximum number of input fields
    e.preventDefault()
    $(wrapper1).append(
      `<div>
        <a href="#" class="remove_field1" style="text-decoration:none">❌</a>
        <div>
          <label for="institution">Institution:</label>
          <input type="text" class="form-control" placeholder="University/School Name" name="institution[]" required / >
        </div>
        <br>
        <div class="form-group">
          <label for="studyType">Degree type:</label>
          <input type="text" class="form-control" id="studyType" placeholder="Enter your Degree type (eg. Masters)" name="studyType[]" required />
        </div>
        <div class="form-group">
          <label for="area">Stream/ Major:</label>
          <input type="text" class="form-control" id="area" placeholder="Enter your specialization" name="area[]" required />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6"><label for="studyStartDate">From:</label>
            <input type="date" name="studyStartDate[]" class="form-control" id="studyStartDate" required />
          </div>
          <div class="form-group col-md-6">
            <label for="studyEndDate">To:</label>
            <input type="date" name="studyEndDate[]" class="form-control" id="studyEndDate" required />
          </div>
        </div>
        <div class="form-group">
          <label for="gpa">CGPA:</label>
          <input type="text" class="form-control" id="gpa" placeholder="Enter your CGPA" name="gpa[]" required />
        </div>
      </div>
      `
    )
  })

  //Once remove button is clicked
  $(wrapper1).on('click', '.remove_field1', function (e) {
    e.preventDefault()
    $(this).parent('div').remove() //Remove field html
  })
  var addButton2 = $('.add_button2') //Add button selector
  var wrapper2 = $('.field_wrapper2') //Input field wrapper

  //Once add button is clicked
  $(addButton2).click(function (e) {
    //Check maximum number of input fields
    e.preventDefault()
    $(wrapper2).append(
      `<div>
        <a href="#" class="remove_field2" style="text-decoration: none">❌</a>
        <div>
          <label for="title">Title:</label>
          <input type="text" class="form-control" placeholder="Title" name="title[]" required />
        </div>
        <br>
        <div class="form-group">
          <label for="awarder">Issuer:</label>
          <input type="text" class="form-control" id="awarder" placeholder="Enter the issuer" name="awarder[]" required />
        </div>
        <div class="form-group">
          <label for="date">Honor Date:</label>
          <input type="date" name="date[]" class="form-control" id="date" required />
        </div>
        <div class="form-group">
          <label for="awardSummary">Summary:</label>
          <textarea type="text" class="form-control" id="awardSummary" placeholder="Describe your achievement" name="awardSummary[]" required />
          </textarea>
        </div>
      </div>
      `
    )
  })

  //Once remove button is clicked
  $(wrapper2).on('click', '.remove_field2', function (e) {
    e.preventDefault()
    $(this).parent('div').remove() //Remove field html
  })
  var addButton3 = $('.add_button3') //Add button selector
  var wrapper3 = $('.field_wrapper3') //Input field wrapper

  //Once add button is clicked
  $(addButton3).click(function (e) {
    //Check maximum number of input fields
    e.preventDefault()
    $(wrapper3).append(
      `<div>
        <a href="#" class="remove_field3" style="text-decoration: none">❌</a>
        <div>
          <label for="skills">Skills:</label>
          <input type="text" class="form-control" id="skillName" placeholder="Name (eg. Web Development, Programming)" name="skillName[]" required />
          <br>
          <select name="level[]" class="form-control" id="level">
            <option>Master</option>
            <option>Intermediate</option>
            <option>Beginner</option>
          </select>
          <br>
          <textarea type="text" class="form-control" id="keywords" placeholder="Enter your skills as a comma separated list (eg. Python, JavaScript)" name="keywords[]" required></textarea>
        </div>
      </div>
      `
    )
  })

  //Once remove button is clicked
  $(wrapper3).on('click', '.remove_field3', function (e) {
    e.preventDefault()
    $(this).parent('div').remove() //Remove field html
  })
})
