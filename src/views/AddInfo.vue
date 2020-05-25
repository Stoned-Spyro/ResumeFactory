<template>
<div id='addInfo'>
    <div class="enter_">Enter your data</div>
    <div id="gototemplates_box"></div>
    <div class="arrow"><b>&#8592;</b></div>
    <div class= "uname">Name:</div>
    <div class="surname">Surname:</div>
    <div class="specialization">Specialization:</div>
    <div class="email">Email:</div>
    <div class="phone_number">Phone number:</div>
    <input class="name_box" v-model="name">
    <input class="surname_box" v-model="surname">
    <input class="specialization_box" v-model="specialization"> 
    <input class="email_box" v-model="email">
    <input class="phone_number_box" v-model="PNumber">
    <div id="line"></div> 
    <div class="specializing_in">Specializing in</div>
    <textarea class="specializing_in_box"></textarea>
    <div id="line2"></div>
    <div class="skills">Skills:</div>
    <div class="languages">Languages:</div>
    <div class="platforms">Platforms:</div>
    <input class="languages_box" v-model="languages">
    <input class="platforms_box" v-model="platforms">
    <div id="line3"></div>
    <div class="education">Education:</div>
    <div class="institution">Institution:</div>
    <div class="b_s">B. S.:</div>
    <div class="minor">Minor:</div>
    <input class="institution_box" v-model="institution">
    <input class="b_s_box" v-model="b_s">
    <input class="minor_box" v-model="minor">
    <div id="line4"></div>
    <div class="employment">Employment:</div>
    <div class="project">Projects:</div>
    <textarea class="employment_box" v-model="employment"></textarea>
    <textarea class="project_box" v-model="project"></textarea>
    <div class="download_box"></div>
    <div class="gototemplates_text">Go to templates</div>
    <div class="download_text">Download</div>
</div>
</template>

<script>
import {db} from '../main';


export default {
    name: 'addInfo',
    data(){
        return{
            name: '',
            surname: '',
            specialization: '',
            email:'',
            PNumber: '',
            languages: '',
            platforms:'',
            institution: '',
            b_s:'',
            minor:'',
            employment:'',
            project: db
        }
    },
    methods: {
        addInfo(){
            db.collection('users-resume').doc('Тут має бути ід юзера').set({
                //дані
            })
        }
    } 
}
</script>

<style>
.header {
    position: relative;
width: 1900px;
height: 120px;


background: rgba(24, 22, 22, 0.66);
}
#logotype
{
    position: absolute;
width: 407px;
height: 116px;
left: 125px;
top: 40px;


}
#logo {
    position: absolute;
width: 69.77px;
height: 150px;
left: 37px;
top: 10px;
}
.enter_{
    position: absolute;
width: 713px;
height: 80px;
left: 415px;
top: 222px;

font-family: 'Kodchasan', sans-serif;

font-weight: normal;
font-size: 48px;
line-height: 62px;
text-align: center;

color: #000000;

}
#gototemplates_box{
    position: absolute;
width: 250px;
height: 56px;
left: 75px;
top: 232px;

background: #DDDCE4;
border-radius: 5px;
}
.gototemplates_text{
    position: absolute;
width: 191px;
height: 19px;
left: 125px;
top: 251px;

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
.arrow
{
    position: absolute;
width: 26px;
height: 16px;
left: 95px;
top: 252px;

}
.uname{
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
{position: absolute;
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
.specialization
{
    position: absolute;
width: 254px;
height: 40px;
left: 75px;
top: 472px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;
}
.email{
    position: absolute;
width: 254px;
height: 41px;
left: 787px;
top: 351px;

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
left: 787px;
top: 411px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;

}
.name_box
{
position: absolute;
width: 300px;
height: 41px;
left: 339px;
top: 351px;
    
background: #DDDCE4;
padding-left: 15px;
border-radius: 5px;
border:none;
outline: none;


}
.surname_box
{
    position: absolute;
width: 300px;
height: 41px;
left: 339px;
top: 411px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;
}
.email_box
{
    position: absolute;
width: 300px;
height: 41px;
left: 1051px;
top: 351px;

background: #DDDCE4;
padding-left: 15px;
border-radius: 5px;
border:none;
outline: none;
}

.phone_number_box{
    position: absolute;
width: 300px;
height: 41px;
left: 1051px;
top: 411px;

background: #DDDCE4;
padding-left: 15px;
border-radius: 5px;
border:none;
outline: none;
}
.specialization_box
{
    position: absolute;
width: 1026px;
height: 40px;
left: 339px;
top: 472px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px; 
border:none;
outline: none;
}
#line
{
    position: absolute;
width: 1352px;
height: 5px;
left: 44px;
top: 563px;

background: #676666;
border-radius: 5px;
}
.specializing_in{
    position: absolute;
width: 254px;
height: 59px;
left: 75px;
top: 599px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;


color: #000000;
}
.specializing_in_box{
    position: absolute;
width: 1290px;
height: 200px;
left: 75px;
top: 656px;

resize: none;
background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;
}
#line2{
    position: absolute;
width: 1352px;
height: 5px;
left: 44px;
top: 910px;

background: #676666;
border-radius: 5px;
}
.skills
{
    position: absolute;
width: 301px;
height: 55px;
left: 75px;
top: 969px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 47px;

color: #000000;
}
.languages
{
    position: absolute;
width: 301px;
height: 55px;
left: 75px;
top: 1030px;

    font-family: Kodchasan;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    
    color: #000000;
    
}
.platforms{
    position: absolute;
    width: 254px;
    height: 40px;
    left: 75px;
    top: 1085px;
    
    font-family: Kodchasan;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    
    color: #000000;
    
}
.languages_box
{
    position: absolute;
    width: 1036px;
    height: 40px;
    left: 333px;
    top: 1030px;
    
    background: #DDDCE4;
    border-radius: 5px;
    padding-left: 15px;
    border:none;
    outline: none;
}
.platforms_box{
    position: absolute;
width: 1036px;
height: 40px;
left: 333px;
top: 1085px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;
}

#line3
{
    position: absolute;
    width: 1352px;
    height: 5px;
    left: 44px;
    top: 1170px;
    
    background: #676666;
    border-radius: 5px;
}

.education{
    position: absolute;
width: 301px;
height: 55px;
left: 75px;
top: 1225px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 47px;

color: #000000;

}

.institution
{
    position: absolute;
width: 254px;
height: 59px;
left: 79px;
top: 1310px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;

}

.b_s{
    position: absolute;
width: 254px;
height: 59px;
left: 79px;
top: 1365px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px
}

.minor
{
    position: absolute;
width: 254px;
height: 59px;
left: 79px;
top: 1420px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;

}

.institution_box
{
    position: absolute;
width: 1036px;
height: 40px;
left: 333px;
top: 1310px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;
}

.b_s_box
{
    position: absolute;
width: 1036px;
height: 40px;
left: 333px;
top: 1365px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;

}

.minor_box
{
    position: absolute;
width: 1036px;
height: 40px;
left: 333px;
top: 1420px;

background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;

}

#line4
{
    position: absolute;
    width: 1352px;
    height: 5px;
    left: 44px;
    top: 1510px;
    
    background: #676666;
    border-radius: 5px;
}

.employment
{
    position: absolute;
width: 254px;
height: 59px;
left: 79px;
top: 1565px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

color: #000000;
}

.project
{
    position: absolute;
    width: 254px;
    height: 59px;
    left: 79px;
    top: 1760px;
    
    font-family: Kodchasan;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    
    color: #000000;
}

.employment_box
{
    position: absolute;
width: 1036px;
height: 150px;
left: 333px;
top: 1565px;

resize: none;
background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;
}

.project_box
{
    position: absolute;
width: 1036px;
height: 150px;
left: 333px;
top: 1760px;

resize: none;
background: #DDDCE4;
border-radius: 5px;
padding-left: 15px;
border:none;
outline: none;

}

.download_text{
position: absolute;
width: 193px;
height: 28px;
left: 1174px;
top: 2013px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

}

.download_box{
    position: absolute;
width: 250px;
height: 56px;
left: 1119px;
top: 2000px;

background: #37334C;
border-radius: 5px;
}
</style>