import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Doctor } from './starter.js';

$(document).ready(function() {
  $('button#findDoc').click(function() {
    event.preventDefault();
    let userInput = $('#issue').val();
    let userInfo = $("#condition").val();
    //  $('#issue').val("");
    //Doctor.user(userInput,infoData, no);


    function infoData(response){
      if(response.data.length == 0){
        $(".errors").append("There is currently nothing we can recommend to you");
      }else if(!userInput){
        $(".errors").append("You need to input a name ");
      }else{
        for(let i= 0; i < response.data.length; i++){
          $('#showDetails').prepend(`<li> Name:  ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} </li> <li>Address: ${response.data[i].practices[0].visit_address.city} ${response.data[i].practices[0].visit_address.state} </li><li>Phone: ${response.data[i].practices[0].phones[0].number}</li>
            <li>${response.data[i].profile.bio}</li> <li> Accepting New Customers: ${response.data[i].practices[0].accepts_new_patients == true} </li> <li><img src="${response.data[i].profile.image_url}"/></li>`);
            console.log(response);
          }
        }
      }

      function con(user){
        if(user.data.length == 0){
          $(".errors").append("There is currently nothing we can recommend to you");
        }else if(!userInfo){
          $(".errors").append();
        }else{
          for(let f= 0; f < user.data.length; f++){
            $('#showDetails').prepend(`<li> Specialities: ${user.data[f].specialties[0].uid} </li><li>${user.data[f].specialties[0].description}</li><li>Name: ${user.data[f].profile.first_name} ${user.data[f].profile.last_name}</li><li><img src="${user.data[f].profile.image_url}"/><li>Address: ${user.data[f].practices[0].visit_address.city} ${user.data[f].practices[0].visit_address.state} </li><li>Phone: ${user.data[f].practices[0].phones[0].number}</li>`);
            console.log(user);
          }
        }
      }

      // $('#showDetails').prepend(`<li>+Description: ${response.data[i].profile.first_name} </li>`);
      // console.log(response);
      //console.log(response)
      // function toFind(find){
      //   if(find.data.length == 0){
      //     $("#errors").append("There is currently nothing we can recommend to you");
      //   }else{
      //     for(let b = 0; b < find.data.length; b++){
      //       $('#showDetails').append(`<li>+Description: ${find.data[b].profile.first_name} </li>`);
      //       console.log(find);
      //     }
      //
      //   }
      //   debugger;
      //
      // }
      function no(){

      }
      // function why(){
      //   if(!userInfo){
      //   $(".errors").append("why");
      // }
      // }



      $('#issue').val("");
      $('#condition').val("");
      Doctor.user(userInput,infoData, no);
      Doctor.mix(userInfo,con,no );
    });
  });
