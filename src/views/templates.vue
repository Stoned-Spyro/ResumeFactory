<template>
<div>
    <div class="choose_template">Choose template</div>
    <div id="go_to_homepage_box"></div>
    <div class="example1"></div>
    <div class="example2"></div>
    <div class="example3"></div>
    <div id="fill_the_form_box"></div>
    <div id="left_arrow"><img src="./images/arrow left icon.png"></div>
    <div id="right_arrow"><img src="./images/arrow right icon.png"></div>
    <div class="go_to_homepage">
        <router-link to = '/'>Go to homepage</router-link>
    </div>
    <div class="fill_the_form"><router-link to = '/AddInfo'> the Form</router-link></div>
</div>
</template>

<script>
export default {
    name: 'templates',
}   
</script>

<style>
.choose_template
{
    position: absolute;
width: 713px;
height: 80px;
left: 364px;
top: 220px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 62px;
text-align: center;

color: #000000;


}

#go_to_homepage_box
{
    position: absolute;
width: 250px;
height: 56px;
left: 75px;
top: 232px;

background: #DDDCE4;
border-radius: 5px;
}

.go_to_homepage
{
    position: absolute;
width: 196px;
height: 19px;
left: 120px;
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


.example1
{
    position: absolute;
width: 352px;
height: 501px;
left: 75px;
top: 336px;

background: #DDDCE4;
}

.example2
{
    position: absolute;
width: 352px;
height: 501px;
left: 544px;
top: 336px;

background: #DDDCE4;
}

.example3
{
    position: absolute;
width: 352px;
height: 501px;
left: 1013px;
top: 336px;

background: #DDDCE4;
}

#fill_the_form_box
{
    position: absolute;
width: 250px;
height: 56px;
left: 1115px;
top: 906px;

background: #DDDCE4;
border-radius: 5px;
}

.fill_the_form
{

    position: absolute;
width: 196px;
height: 19px;
left: 1130px;
top: 924px;

font-family: Kodchasan;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 39px;
display: flex;
align-items: center;
text-align: center;

color: #000000;

}

#left_arrow
{
    position: absolute;
width: 26px;
height: 16px;
left: 88px;
top: 252px;

}

#right_arrow
{
    position: absolute;
width: 26px;
height: 16px;
left: 1330px;
top: 930px;

}
</style>