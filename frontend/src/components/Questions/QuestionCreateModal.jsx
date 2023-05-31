import React, { useState } from 'react';
import axios from 'axios';

function QuestionCreateModal() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior


    let questionText = event.target.elements.questionText.value;
    let questionType = event.target.elements.questionType.value;

    if (questionType === 'open') {
      questionType = false;
    } else if (questionType === "mc") {
      questionType = true;
    }
    
    let formData = JSON.stringify({
      questionText: questionText,
      questionType: questionType,
    });
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/questions/create', formData, {headers: {
        "Content-Type": "application/json"}
    }); // Change '/your-api-endpoint' to your actual API endpoint
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  return (
    <div className="modal fade" id="modalQuestionCreateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Vraag toevoegen
              </h5>
              <button type="button" className="close bg-white border-0" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="questionType" className="mb-2">
                    Type van de vraag
                  </label>
                  <select className="form-select mb-2" id="questionType">
                    <option defaultValue>Kies een type</option>
                    <option value="open">Open vraag</option>
                    <option value="mc">MC vraag</option>
                  </select>
                  <label htmlFor="questionText" className="mb-2">
                    Tekst van de vraag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="questionText"
                    placeholder="Vul hier de tekst van de vraag in"
                  />
                </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Opslaan
              </button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Sluiten
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuestionCreateModal;
