import React from 'react';    
import Modal from 'react-modal'; 

const PersonModal = (props) => {
  // console.log('PersonModal'); 
  // console.log(props.selectedPerson); 
  let ckOpen = props.selectedPerson && props.selectedPerson.hasOwnProperty('id'); 
  
  const customStyles = {
    overlay: {zIndex: 99999} 
  }

  return (    // shorthand;  implicit JSX (removed return { .. } )
    <Modal 
      isOpen={ckOpen} 
      contentLabel='Featured Contestant'
      onRequestClose={props.handleClearSelectedPerson}   /* will close Modal if hitting Esc key or clicking outside Modal */
      closeTimeoutMS={200}
      className="modal"
      style={customStyles} 
    >

      {props.selectedPerson && 
        <div className="modal__body">
          <h3 className="modal__title"> 
            <span className="modal_name">{props.selectedPerson.first_name} {props.selectedPerson.last_name}</span> 
            <span className="modal_entry">[id #{props.selectedPerson.id}]</span></h3>
            <p className="modal_age">{props.selectedPerson.age} yrs old, &nbsp; {props.selectedPerson.gender}, &nbsp; from {props.selectedPerson.state},
                 &nbsp; {props.selectedPerson.professional} </p>
          <h2>Score:  <span className="modal_score">{props.selectedPerson.score}</span></h2>
          {/*<img src={props.selectedPerson.image} alt="Contestant Img" width="250" height = "250" /> */}
          <div className="flex_data">
            <div>
              <span className="modal_label">Profession: </span>
              <span className="modal_label">Catchphrase: </span>
              <span className="modal_label">Favorite Movie:</span>
            </div>
            <div>
              <p className="modal_job">{props.selectedPerson.job}</p>
              <p className="modal_catchphrase">{props.selectedPerson.catchphrase}</p>
              <p className="modal_movie"> {props.selectedPerson.favorite_movie}</p>
            </div>
          </div>        

          <div className="modal_bio"><span className="modal_label modal_lorem_intro">In Their Own Words:</span> 
            <p className="modal_lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Purus gravida quis blandit turpis cursus in hac habitasse platea. Lacus sed viverra tellus in hac habitasse platea. 
              Nam aliquam sem et tortor consequat. Nulla pharetra diam sit amet nisl suscipit adipiscing. </p>
          </div>
        </div>
      }
      <button className="button_modal" onClick={props.handleClearSelectedPerson}>Okay</button>  {/* props fn to clear state.selectedOption (close Modal) */}
    </Modal>
  )}; 

export default PersonModal;
