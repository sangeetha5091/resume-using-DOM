const resume_full_conatiner = document.createElement("section");
resume_full_conatiner.classList.add("resume-full-conatiner");

//======================= Header Starts =======================
const header_section = document.createElement("section");
header_section.classList.add("resume-header-section");

const resume_profile_conatiner = document.createElement("div");
resume_profile_conatiner.classList.add("resume-profile_conatiner");

resume_profile_conatiner.innerHTML = `<svg id="graph" width="200px" height="180px"><defs>
<pattern id="image" x="0%"  y="0%" height="100%" width="100%" viewBox="0 0 412 412">
<image x="0%" y="0%" width="412" height="412" 
xlink:href="images/profile.png">
</image> </pattern> </defs> <circle id="sd" cx="100" cy="100" r="89" fill="url(#image)" 
stroke="rgb(245, 193, 22)" stroke-dasharray="0 10" fill="transparent" 
stroke-linecap="round" stroke-width="7" /> </svg>`;
const whitebox_container = document.createElement("div");
whitebox_container.classList.add("whitebox_container");

const namebox_container = document.createElement("div");
namebox_container.classList.add("namebox_container");

const namebox_container_h2 = document.createElement("h2");
namebox_container_h2.innerText = "Sangeetha";
namebox_container.append(namebox_container_h2);
whitebox_container.append(namebox_container);

header_section.append(resume_profile_conatiner, whitebox_container);
//======================= header Ends =======================

// ===================== Main Starts =========================
const main_container = document.createElement("main");
main_container.classList.add("main_container");

const nav = document.createElement("nav");
const person_info = document.createElement("p");
person_info.innerText =
  "Sangeetha, Email: sangeeswty4@gmail.com | Phone: 1234567890";
nav.append(person_info);

const divider = document.createElement("div");
divider.classList.add("divider");

//==================== Left side of resume Content  Starts HERE=============================

const person_info_container = document.createElement("section");
person_info_container.classList.add("person-info_container");

const box1 = document.createElement("div");
box1.classList.add("box1");

const content_section = document.createElement("div");
content_section.classList.add("content_section");

const content_section_h3 = document.createElement("h3");
content_section_h3.innerHTML = `<span class="circle-icon-div">
<i class="fa-solid fa-user-large circle-icon"></i></span>Profile</h3>`;

const content_section_p = document.createElement("p");
content_section_p.innerText = `
Innovative optimized solution seeker. Excited to be at the deployment phase of my career as a web devloper. 
I am ambitious, adventurous, assiduous, animated and an alliteration advocate.`;
content_section.append(content_section_h3, content_section_p);

//    <!-- Skill -->
const content_section_skill = document.createElement("div");
content_section_skill.classList.add("content_section");

const content_section_skill_h3 = document.createElement("h3");
content_section_skill_h3.innerHTML = `<span class="circle-icon-div">
<i class="fa-solid fa-user-large circle-icon"></i></span>Skills</h3>`;
content_section_skill.append(content_section_skill_h3);

//  <!-- *********** Technical Skills *********** -->
const Technical_Skills_Full_Div = document.createElement("div");
const skill_title_h4 = document.createElement("h4");
skill_title_h4.classList.add("skill-title");
skill_title_h4.innerText = "Technical Skills";

const skill_container_box = document.createElement("section");
skill_container_box.classList.add("skill-container-box");

//  <!-- Skill title box -->
const language_title = document.createElement("div");
language_title.classList.add("language-title");
const language_title_ul = document.createElement("ul");
language_title_ul.innerHTML = `<li>Javascript</li><li>CSS</li><li>HTML</li><li>React</li>
<li>Redux</li><li>Mongo</li><li>Deployment</li>`;
language_title.append(language_title_ul);

//  <!-- range slider -->
const slider_div = document.createElement("div");
slider_div.classList.add("box");

slider_div.innerHTML = ` 
<input type="range" class="range range-1" value="80" min="0"  max="100"/>
<input type="range" class="range range-2" value="80" min="0"max="100"/>
<input type="range" class="range range-3" value="70" min="0" max="100"/>
<input type="range" class="range range-4" value="70" min="0" max="100"/>
<input type="range" class="range range-4"  value="45"  min="0" max="100"/>
<input type="range" class="range range-4" value="55"  min="0" max="100" />
<input type="range"  class="range range-4" value="89"  min="0"  max="100" />`;

skill_container_box.append(language_title, slider_div);
Technical_Skills_Full_Div.append(skill_title_h4, skill_container_box);

// <!-- *********** Addition Skills *********** -->
const addition_Skill_Div = document.createElement("div");
const addition_Skill_h4 = document.createElement("h4");
addition_Skill_h4.classList.add("skill-title");
addition_Skill_h4.innerText = "Addition Skills";

const addition_Skill_section = document.createElement("div");
addition_Skill_section.classList.add("skill-container-box");
//    <!-- Skill title box -->
const addition_Skill_language_title = document.createElement("div");
addition_Skill_language_title.classList.add("language-title");
const addition_Skill_language_title_ul = document.createElement("ul");
addition_Skill_language_title_ul.innerHTML = `<li>Project Mangement</li>
<li>Recruitment</li><li>Development</li><li>Editing</li><li>Fundraising</li>`;
addition_Skill_language_title.append(addition_Skill_language_title_ul);

const addition_Skill_Div_box = document.createElement("div");
addition_Skill_Div_box.classList.add("box");
addition_Skill_Div_box.innerHTML = `
<input type="range" class="range range-1" value="90" min="0" max="100"/>
<input type="range"  class="range range-2" value="50"  min="0" max="100"/>
<input type="range" class="range range-3" value="80" min="0" max="100"/>
<input type="range" class="range range-4" value="95" min="0" max="100" />
<input type="range" class="range range-4"value="70" min="0" max="100" />`;
addition_Skill_section.append(
  addition_Skill_language_title,
  addition_Skill_Div_box
);

addition_Skill_Div.append(addition_Skill_h4, addition_Skill_section);

//<!-- work experience -->
const work_Experience_Div = document.createElement("div");
work_Experience_Div.classList.add("content_section");

const work_Experience_Div_h3 = document.createElement("h3");
work_Experience_Div_h3.innerHTML = `<span class="circle-icon-div">
<i class="fa-solid fa-briefcase"></i></span> Work experience`;

const work_experience_header = document.createElement("div");
work_experience_header.classList.add("work-experience_header");

const work_experience_role_box1 = document.createElement("div");
work_experience_role_box1.classList.add("role_box1");
const work_experience_role_box1_h4 = document.createElement("h4");
work_experience_role_box1_h4.innerText = "Event Manger";
const work_experience_role_box1_para = document.createElement("p");
work_experience_role_box1_para.innerText = "C3 Presents, Washington DC";

work_experience_role_box1.append(
  work_experience_role_box1_h4,
  work_experience_role_box1_para
);
const work_experience_role_box2 = document.createElement("div");
work_experience_role_box2.classList.add("role_box2");
const work_experience_role_box2_para = document.createElement("p");
work_experience_role_box2_para.innerText = "03/2014 - 02/2017";
work_experience_role_box2.append(work_experience_role_box2_para);

// work-experience_content
const work_experience_content = document.createElement("div");
work_experience_content.classList.add("work-experience_content");

const work_experience_content_ul = document.createElement("ul");

const work_experience_content_li_1 = document.createElement("li");
work_experience_content_li_1.innerText = `
Lead and excute all phases of event planning and production spanning 
commitee recruitment, training, vendor relationships and on-site facilitation.`;

const work_experience_content_li_2 = document.createElement("li");
work_experience_content_li_2.innerText = `Brought new business to the organization through 
relentless networking and stewardship which helped the 
company win the  bid for the State Department Summit on the Middle East and, the companies largest civic 
event to date, the United State of Women.`;

const work_experience_content_li_3 = document.createElement("li");
work_experience_content_li_3.innerText = `Exercise fiscal control over budget creation, 
tracking and resporting. Collaborate with employeees
 at all organizational levels to advance cohesive opaertions.`;
work_experience_content_ul.append(
  work_experience_content_li_1,
  work_experience_content_li_2,
  work_experience_content_li_3
);
work_experience_content.append(work_experience_content_ul);
work_experience_header.append(
  work_experience_role_box1,
  work_experience_role_box2
);
work_Experience_Div.append(
  work_Experience_Div_h3,
  work_experience_header,
  work_experience_content
);

// left side Box1 appending elements
box1.append(
  content_section,
  content_section_skill,
  Technical_Skills_Full_Div,
  addition_Skill_Div,
  work_Experience_Div
);
//  <!-- ==================== Left side of resume Content  ENDS HERE=============================-->

// <!-- divider -->
const center_Divider = document.createElement("div");
center_Divider.classList.add("divider-h");

// <!-- ==================== Right side of resume Content starts Here =============================-->
const box2 = document.createElement("div");
box2.classList.add("box2");
//   work experience
const work_Experience_Div2 = document.createElement("div");
work_Experience_Div2.classList.add("content_section");

const work_Experience_Div2_h3 = document.createElement("h3");
work_Experience_Div2_h3.innerHTML = `<span class="circle-icon-div">
<i class="fa-solid fa-briefcase circle-icon"></i> </span> Work experience`;

const work_experience_header2 = document.createElement("div");
work_experience_header2.classList.add("work-experience_header");

const work_Experience_Div2_role_box1 = document.createElement("div");
work_Experience_Div2_role_box1.classList.add("role_box1");

const work_Experience_Div2_role_box1_h4 = document.createElement("h4");
work_Experience_Div2_role_box1_h4.innerText = "Community Relations Manager";

const work_Experience_Div2_role_box1_para = document.createElement("p");
work_Experience_Div2_role_box1_para.innerText = "Gay & Lesbian,Los Angeles";
work_Experience_Div2_role_box1.append(
  work_Experience_Div2_role_box1_h4,
  work_Experience_Div2_role_box1_para
);

const work_Experience_Div2_role_box2 = document.createElement("div");
work_Experience_Div2_role_box2.classList.add("role_box2");

const work_Experience_Div2_role_box2_para = document.createElement("p");
work_Experience_Div2_role_box2_para.innerText = "06/2011 - 01/2014";

work_Experience_Div2_role_box2.append(work_Experience_Div2_role_box2_para);
work_experience_header2.append(
  work_Experience_Div2_role_box1,
  work_Experience_Div2_role_box2
);

const work_Experience_Div2_content = document.createElement("div");
work_Experience_Div2_content.classList.add("work-experience_content");

const work_Experience_Div2_content_ul = document.createElement("ul");
const work_Experience_Div2_content_li_1 = document.createElement("li");
work_Experience_Div2_content_li_1.innerText =
  "Arranging presentations and pitch deck.";

const work_Experience_Div2_content_li_2 = document.createElement("li");
work_Experience_Div2_content_li_2.innerText =
  "Designing a PR plan and establishing important focus points.";

const work_Experience_Div2_content_li_3 = document.createElement("li");
work_Experience_Div2_content_li_3.innerText =
  "Designing multiple communication platforms.";

const work_Experience_Div2_content_li_4 = document.createElement("li");
work_Experience_Div2_content_li_4.innerText =
  "Building relationships with key media players";

work_Experience_Div2_content_ul.append(
  work_Experience_Div2_content_li_1,
  work_Experience_Div2_content_li_2,
  work_Experience_Div2_content_li_3,
  work_Experience_Div2_content_li_4
);
work_Experience_Div2_content.append(work_Experience_Div2_content_ul);
work_Experience_Div2.append(
  work_Experience_Div2_h3,
  work_experience_header2,
  work_Experience_Div2_content
);

//=============================================== Education ===============================================
const education_content_section = document.createElement("div");
education_content_section.classList.add("content_section");

const education_content_section_h3 = document.createElement("h3");
education_content_section_h3.innerHTML = `<span class="circle-icon-div">
<i class="fa-solid fa-graduation-cap circle-icon"></i></span>Education`;

const education_header = document.createElement("div");
education_header.classList.add("work-experience_header");

const education_header_role_box1 = document.createElement("div");
education_header_role_box1.classList.add("role_box1");

const education_header_role_box1_h4 = document.createElement("h4");
education_header_role_box1_h4.innerText = "Engineering Immersion Program";

const education_header_role_box1_para = document.createElement("p");
education_header_role_box1_para.innerText = "Thinkful, Chicago, IL";
education_header_role_box1.append(
  education_header_role_box1_h4,
  education_header_role_box1_para
);

const education_header_role_box2 = document.createElement("div");
education_header_role_box2.classList.add("role_box2");

const education_header_role_box2_para = document.createElement("p");
education_header_role_box2_para.innerText = "11/2018 - 06/2018";
education_header_role_box2.append(education_header_role_box2_para);
education_header.append(education_header_role_box1, education_header_role_box2);

const education_content_section_para = document.createElement("p");
education_content_section_para.innerText = `Project-focused intensive program with emphasis on Mongo,Express,
React and Javascript (MERN) technical stack.`;

const education_content_section_Div = document.createElement("div");
education_content_section_Div.classList.add("work-experience_content");

const education_content_section_Div_ul = document.createElement("ul");
const education_content_section_Div_li_1 = document.createElement("li");
education_content_section_Div_li_1.innerText = `Developed a full-stack web application, RenewU, using React that allows users to explore
various aspects of meditation. User's progress is stored on abackend created using Node and MongoDB.`;
const education_content_section_Div_li_2 = document.createElement("li");
education_content_section_Div_li_2.innerText = `Developed a language learning app, Foodie Phonetics using spaced repetition and a linked list data 
structure. React was used to create the front end components while Node and Mongo were used to create 
a backend that stores user data.`;
const education_content_section_Div_li_3 = document.createElement("li");
education_content_section_Div_li_3.innerText = `Developed a concierge app, Pley, for individuals lookingfor curated suggestions when visiting a new place.
 React was  used to develop the front end which includes real-time chat,  drag and drop and variety of 
 advanced features. The backend, built using Node, Express and MongoDB takes adavantage of  well develped 
 RESTful API Geaospatial searching, and user  authentication with JWT.`;
education_content_section_Div_ul.append(
  education_content_section_Div_li_1,
  education_content_section_Div_li_2,
  education_content_section_Div_li_3
);
education_content_section_Div.append(education_content_section_Div_ul);

const final_header = document.createElement("div");
final_header.classList.add("work-experience_header");

const final_header_role_box1 = document.createElement("div");
final_header_role_box1.classList.add("role_box1");

const final_header_role_box1_h4 = document.createElement("h4");
final_header_role_box1_h4.innerText = "BA, English";

const final_header_role_box1_para = document.createElement("p");
final_header_role_box1_para.innerText = "University of California, Los Angles";
final_header_role_box1.append(
  final_header_role_box1_h4,
  final_header_role_box1_para
);

const final_header_role_box2 = document.createElement("div");
final_header_role_box2.classList.add("role_box2");
const final_header_role_box2_para = document.createElement("p");
final_header_role_box2_para.innerText = "09/2001 - 09/2005";

final_header_role_box2.append(final_header_role_box2_para);
final_header.append(final_header_role_box1, final_header_role_box2);
education_content_section.append(
  education_content_section_h3,
  education_header,
  education_content_section_para,
  education_content_section_Div,
  final_header
);
box2.append(work_Experience_Div2, education_content_section);
person_info_container.append(box1, center_Divider, box2);
main_container.append(nav, divider, person_info_container);
resume_full_conatiner.append(header_section, main_container);
document.body.append(resume_full_conatiner);
