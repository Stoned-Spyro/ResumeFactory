<template>
<div>
    <div class="enter_"><link href="https://fonts.googleapis.com/css2?family=Kodchasan:wght@400;500&display=swap" rel="stylesheet">Enter your data</div>
    <div id="gototemplates_box"></div>
    <div class="arrow"><b>&#8592;</b></div>
    <div class= "name">Name:</div>
    <div class="surname">Surname:</div>
    <div class="specialization">Specialization:</div>
    <div class="email">Email:</div>
    <div class="phone_number">Phone number:</div>
    <input class="name_box">
    <input class="surname_box">
    <input class="specialization_box">
    <input class="email_box">
    <input class="phone_number_box">
    <div id="line"></div> 
    <div class="specializing_in">Specializing in</div>
    <textarea class="specializing_in_box"></textarea>
    <div id="line2"></div>
    <div class="skills">Skills:</div>
    <div class="languages">Languages:</div>
    <div class="platforms">Platforms:</div>
    <input class="languages_box">
    <input class="platforms_box">
    <div id="line3"></div>
    <div class="education">Education:</div>
    <div class="institution">Institution:</div>
    <div class="b_s">B. S.:</div>
    <div class="minor">Minor:</div>
    <input class="institution_box">
    <input class="b_s_box">
    <input class="minor_box">
    <div id="line4"></div>
    <div class="employment">Employment:</div>
    <div class="project">Projects:</div>
    <textarea class="employment_box"></textarea>
    <textarea class="project_box"></textarea>
    <div class="download_box"></div>
    <div class="gototemplates_text"><a href="">Go to templates</div>
    <div class="download_text"><a href="">Download</div>
</div>
</template>

<script>
export default {
    name: 'addinfo'
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
.name{
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
</style>