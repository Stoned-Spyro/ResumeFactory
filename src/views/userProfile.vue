<template>
  <div id='userProfile'>
        <div class="your_profile">Your profile</div>
        <div class="name">Name:</div>
        <div class="surname">Surname:</div>
        <div class="email">Email:</div>
        <div class="phone_number">Phone number:</div>
        <div class="specialization">Specialization:</div>
        <p class="name_input">{{user_name}}</p>
        <p class="surname_input">{{surname}}</p>
        <p class="email_input">{{email}}</p>
        <p class="phone_number_input">{{PNumber}}</p>
        <p class="specialization_input">{{specialization}}</p>
        <div class="photo_box"></div>
        <div class="your_resumes">Your resumes:</div>
        <div class="example1"></div>
        <div class="example2"></div>
        <div class="example3"></div>
        <div class="example4"></div>
        <div class="example5"></div>
        <div class="example6"></div>
        <div id="eye_icon1"><img src=""></div>
        <div id="arrow1"><img src=""></div>
        <div id="eye_icon2"><img src=""></div>
        <div id="arrow2"><img src=""></div>
        <div id="eye_icon3"><img src=""></div>
        <div id="arrow3"><img src=""></div>
        <div id="eye_icon4"><img src=""></div>
        <div id="arrow4"><img src=""></div>
        <div id="eye_icon5"><img src=""></div>
        <div id="arrow5"><img src=""></div>
        <div id="eye_icon6"><img src=""></div>
        <div id="arrow6"><img src=""></div>
        <div id="arrow_down"><img src=""></div>
        <!-- <div class="save_changes">Save changes</div> -->
        <button @click="deleteProfile" class="save_changes">Delete profile</button>
  </div>
</template>

<script>
import {db} from '../main'
// import {currentUser} from '../router' 
import firebase from 'firebase'  
// var imagesRef=storage.ref().child('users_photo');
export default {
    name: 'userProfile',
    data(){
        return{
            user_name:'',
            surname:'',
            email:'',
            PNumber:'',
            specialization:''
        }
    },
      created(){
           var user = firebase.auth().currentUser.uid
           console.log(user)
         db.collection('Users').where('id','==',user)
        .get()
        .then(snap => {
            snap.forEach(doc =>{
                console.log(doc)
            this.user_name=doc.data().name
            this.surname=doc.data().surname
            this.email=doc.data().email
            this.PNumber=doc.data().PNumber
            this.specialization=doc.data().specialization
            })
        })
            
      

    },
    methods:{
        deleteProfile(){
            var AreUSure=confirm('Are you sure. Your account will be deleted')
            if(AreUSure){
                firebase.auth().currentUser.delete().then(()=>{
                    this.$buefy.toast.open({
                    message: 'Your account succesfully deleted',
                    type: 'is-success'
                })
                this.$router.push({path:'/'})
                 },
                 (err)=>{
                    this.$buefy.toast.open({
                    duration: 5000,
                    message: err.message,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
                 }
                )}
            else{
               this.$buefy.toast.open({
                    message: 'Canceled',
                    type: 'is-success'
                })
            }
        },
        // uploadPhoto(){
        //   var currentUserFolder=imagesRef.parent.child(currentUser.uid)
        // }
    }
}

</script>

<style>
    #resumefactory{
    position: absolute;
width: 407px;
height: 116px;
left: 125px;
top: 45px;

font-family: Kodchasan;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 75px;
/* or 156% */


color: #FFFFFF;
}


.your_profile
{
    position: absolute;
width: 713px;
height: 80px;
left: 363px;
top: 220px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 62px;
text-align: center;

color: #000000;
}

.name
{
    position: absolute;
width: 254px;
height: 41px;
left: 75px;
top: 351px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;
}

.surname
{
    position: absolute;
    width: 254px;
    height: 41px;
    left: 75px;
    top: 411px;
    
    font-family: Kodchasan;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    
    color: #000000;
    
}

.email
{
    position: absolute;
width: 254px;
height: 41px;
left: 75px;
top: 471px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;

}

.phone_number
{
    position: absolute;
width: 254px;
height: 41px;
left: 75px;
top: 531px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;

}

.specialization
{
    
position: absolute;
width: 254px;
height: 40px;
left: 75px;
top: 591px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;

}

.name_input
{
    position: absolute;
width: 314px;
height: 41px;
left: 339px;
top: 351px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;

}

.surname_input
{
    position: absolute;
width: 314px;
height: 41px;
left: 339px;
top: 411px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;
}

.email_input
{
    position: absolute;
width: 314px;
height: 41px;
left: 339px;
top: 471px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;
}

.phone_number_input
{
    position: absolute;
    width: 314px;
    height: 41px;
    left: 339px;
    top: 531px;
    
    background: #DDDCE4;
    border-radius: 5px;
    padding-left: 15px;
border:none;
outline: none;
}


.specialization_input
{
    position: absolute;
    width: 732px;
    height: 40px;
    left: 339px;
    top: 591px;
    
    background: #DDDCE4;
    border-radius: 5px;
    padding-left: 15px;
border:none;
outline: none;
}

.photo_box
{
    position: absolute;
width: 204px;
height: 272px;
left: 1156px;
top: 300px;

background: #DDDCE4;
}

.upload_photo_box
{
    position: absolute;
width: 204px;
height: 33px;
left: 1156px;
top: 591px;

background: #DDDCE4;
border-radius: 5px;
}

.upload_photo
{
    position: absolute;
width: 165px;
height: 23px;
left: 1175px;
top: 595px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
}

a {
    color: black;
    text-decoration: none;
}

.save_changes_box
{
    position: absolute;
width: 204px;
height: 46px;
left: 1156px;
top: 639px;

background: #37334C;
border-radius: 5px;
}

.save_changes
{
    position: absolute;
width: 169px;
height: 32px;
left: 1173px;
top: 645px;

background:#960019 ;
color:black;
font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
}

.delete_profile
{
    position: absolute;
width: 165px;
height: 36px;
left: 1196px;
top: 215px;

font-family: Kodchasan;
font-style: normal;
font-weight: 200;
font-size: 24px;
line-height: 31px;
display: flex;
align-items: center;
text-align: center;
text-decoration-line: underline;

color: #000000;
}
.your_resumes
{
    position: absolute;
width: 713px;
height: 80px;
left: 583px;
top: 710px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 62px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
}

.example1
{
    position: absolute;
width: 352px;
height: 501px;
left: 75px;
top: 850px;

background: #DDDCE4;
}

.example2
{
    position: absolute;
width: 352px;
height: 501px;
left: 550px;
top: 850px;

background: #DDDCE4;
}

.example3
{
    position: absolute;
    width: 352px;
    height: 501px;
    left: 1025px;
    top: 850px;
    
    background: #DDDCE4;
}

.example4
{
    position: absolute;
width: 352px;
height: 501px;
left: 75px;
top: 1410px;

background: #DDDCE4;
}

.example5
{
    position: absolute;
width: 352px;
height: 501px;
left: 550px;
top: 1410px;

background: #DDDCE4;
}

.example6
{
    position: absolute;
    width: 352px;
    height: 501px;
    left: 1025px;
    top: 1410px;
    
    background: #DDDCE4;
}

#eye_icon1
{
    position: absolute;
width: 50px;
height: 50px;
left: 430px;
top: 1225px;
}

#arrow1
{
    position: absolute;
width: 50px;
height: 50px;
left: 430px;
top: 1280px;
}

#eye_icon2
{
    position: absolute;
width: 50px;
height: 50px;
left: 910px;
top: 1225px;
}

#arrow2
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 910px;
    top: 1280px;
}

#eye_icon3
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 1380px;
    top: 1225px;
}

#arrow3
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 1380px;
    top: 1280px;
}

#eye_icon4
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 430px;
    top: 1795px;
 }

#arrow4
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 430px;
    top: 1850px;
}

#eye_icon5
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 910px;
    top: 1795px;   
}

#arrow5
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 910px;
    top: 1850px;
}

#eye_icon6
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 1380px;
    top: 1795px;
}

#arrow6
{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 1380px;
    top: 1850px;
}

#arrow_down
{
    position: absolute;
    width: 70px;
    height: 70px;
    left: 710px;
    top: 1950px;
}

</style>