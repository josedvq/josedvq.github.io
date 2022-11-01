"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4574],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),p=r,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7243:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905)),i=a(1401);const o={title:"Projects"},s=void 0,c={type:"mdx",permalink:"/projects",source:"@site/src/pages/projects.mdx",title:"Projects",frontMatter:{title:"Projects"}},l=[],d={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.oP,{mdxType:"ProjectsList"}))}m.isMDXComponent=!0},1401:(e,t,a)=>{a.d(t,{IK:()=>L,oP:()=>P,I_:()=>R,sT:()=>i});var n=a(7294),r=a(6306);const i=e=>{let{stack:t}=e;return n.createElement(n.Fragment,null,t.map((e=>n.createElement(r.Z,{label:e,color:"secondary",style:{marginRight:5},key:e}))))},o="container_c17D",s="imgContainer_arMn",c="img_K7ni",l="content_A65C",d="titleContainer_h5La",m="title_EaXC",u="description_qJJf",p="linkContainer_NQ6x",f="paperContainer_owZE",h="title_UFdU",g="date_O8gS",y="authors__36R",v="publication_rgyV",b="url_uCqg";var w=a(2949),k=a(918),E=a(8454),C=a(9762),O=a(1927);const j=(0,E.ZP)(k.Z)((e=>{let{theme:t}=e;return{color:t.palette.text.secondary}})),_=(0,C.Z)({palette:{mode:"dark"}}),I=(0,C.Z)({palette:{mode:"light"}}),x=e=>{let{title:t,authors:a,publication:r,url:i,date:o}=e;const{isDarkTheme:s}=(0,w.I)(),c=s?_:I;return n.createElement(O.Z,{theme:c},n.createElement(j,{elevation:2,className:f},i&&n.createElement("a",{className:b,href:i,target:"_blank"},n.createElement("i",{className:"fa-solid fa-link"})),i?n.createElement("a",{className:h,href:i,target:"_blank"},t):n.createElement("span",{className:h},t),n.createElement("span",{className:g},o),n.createElement("span",{className:y},a),r&&n.createElement("span",{className:v},r)))},L=e=>{let{img:t,title:a,description:r,codeLink:f,liveLink:h,techstack:g,papers:y,tags:v}=e;const{isDarkTheme:b}=(0,w.I)();return n.createElement("section",{className:o},t&&n.createElement("div",{className:s},n.createElement("img",{src:t,className:c,alt:"dummy img"})),n.createElement("div",{className:l},n.createElement("div",{className:d},n.createElement("span",{className:m},a)),n.createElement("span",{className:u},r),y&&y.map((e=>n.createElement("div",{style:{margin:"1em auto"}},n.createElement(x,e)))),n.createElement("div",{className:p},f?n.createElement("a",{style:{marginRight:".7rem",marginLeft:"-.7rem",padding:".5rem .7rem"},href:f,target:"_blank"},"Code"):n.createElement(n.Fragment,null),h?n.createElement("a",{style:{marginRight:".7rem",marginLeft:"-.7rem",padding:".5rem .7rem"},href:h,target:"_blank"},"Live"):n.createElement(n.Fragment,null)),g&&n.createElement(i,{stack:g})))};var T=a(7462);const D=[{img:"img/covfee.jpg",title:"Covfee: an extensible web framework for continuous-time annotation of human behavior",description:"During my PhD, I developed a web-based, extensible framework for continuous annotation aimed at crowd-sourcing. Our experiments showed that continuous techniques (implemented in Covfee) can save human annotation time with no loss in annotation agreement.",codeLink:"https://github.com/josedvq/covfee",liveLink:"https://josedvq.github.io/covfee/",papers:[{title:"Covfee: an extensible web framework for continuous-time annotation of human behavior",authors:"Jose Vargas-Quiros, Stephanie Tan, Chirag Raman, Laura Cabrera-Quiros, and Hayley Hung",publication:"Understanding Social Behavior in Dyadic and Small Group Interactions, Proceedings of Machine Learning Research",url:"https://proceedings.mlr.press/v173/vargas-quiros22a.html",date:"2022"}]},{img:"img/conflab.jpg",title:"The ConfLab Social Interaction Dataset",description:"A privacy-sensitive data collection concept and dataset for in-the-wild social interactions. We recorded free interaction of 48 subjects during a networking event at ACM Multimedia 2019. Our capture setup improves upon the data fidelity of prior in-the-wild datasets while retaining privacy sensitivity. We recorded videos from a non-invasive overhead view. Via chest-worn wearable sensors, we recorded body motion (9-axis IMU) low-frequency audio (1250 Hz), and Bluetooth-based proximity. Our benchmarks showcase some of the open research tasks related to in-the-wild privacy-preserving social data analysis: keypoints detection from overhead camera views, skeleton-based no-audio speaker detection, and F-formation detection. ",codeLink:"https://github.com/TUDelft-SPC-Lab/conflab",liveLink:"https://data.4tu.nl/collections/ConfLab_A_Rich_Multimodal_Multisensor_Dataset_of_Free-Standing_Social_Interactions_In-the-Wild/6034313",papers:[{title:"ConfLab: A Data Collection Concept, Dataset, and Benchmark for Machine Analysis of Free-Standing Social Interactions in the Wild",authors:"Chirag Raman*, Jose Vargas-Quiros*, Stephanie Tan*, Ekin Gedik, Ashraful Islam, and Hayley Hung",publication:"NeurIPS 2022 Datasets and Benchmarks Track",url:"https://doi.org/10.48550/arXiv.2205.05177",date:"2022"},{title:"Multimodal Data Collection for Social Interaction Analysis In-the-Wild",authors:"Hayley Hung, Chirag Raman, Ekin Gedik, Stephanie Tan and Jose Vargas",publication:"MM '19 - Proceedings of the 27th ACM International Conference on Multimedia",url:"https://dl-acm-org.tudelft.idm.oclc.org/doi/10.1145/3343031.3351320",date:"2019"}]},{title:"Attraction and body movement in speed dates",description:"We present a study of attraction in the dyadic speed date setting. The study made use of accelerometer information (from chest-worn accelerometers) from 398 dyadic speed dates to analyze the relationship between body movement and self-reported affiliative goals related to attraction. Through machine learning experiments designed to capture individual and pairwise body movement information, we investigated the predictive power of body movement information towards attraction estimation. In particular, the pairwise features used in our study were designed to capture synchrony, mimicry and convergence information.",papers:[{title:"Individual and joint body movement assessed by wearable sensing as a predictor of attraction in speed dates",authors:"Jose Vargas-Quiros, Oyku Kacap, Hayley Hung, Laura Cabrera-Quiros",publication:"IEEE Transactions on Affective Computing",url:"https://ieeexplore.ieee.org/document/9662986",date:"2021"},{title:"Estimating Romantic, Social, and Sexual Attraction by Quantifying Bodily Coordination using Wearable Sensors",authors:"Oyku Kacap, Jose Vargas-Quiros, Hayley Hung",publication:"International Conference on Affective Computing and Intelligent Interaction Workshops and Demos (ACIIW)",url:"https://ieeexplore.ieee.org/document/8925137",date:"2019"}]},{title:"Differences in the annotation of laughter across modalities ",description:"Although laughter is well-recognized as a multimodal phenomenon, it is unclear how annotation of laughter differs when done from modalities like video, without access to audio. In this work we take a first step in this direction by asking if and how well laughter can be annotated when only audio, only video (containing full body movement information) or audiovisual modalities are available to annotators. We ask whether annotations of laughter are congruent across modalities, and compare the effect that labeling modality has on machine learning model performance. We compare annotations and models for laughter detection, intensity estimation, and segmentation, three tasks common in previous studies of laughter. Our analysis makes use of more than 4000 annotations acquired from 48 annotators, making use of the Covfee annotation framework.",papers:[{title:"Differences in annotation of laughter across modalities",authors:"Jose Vargas-Quiros, Laura Cabrera-Quiros, Catharine Oertel, and Hayley Hung",date:"2022"}]},{title:"LaRed dataset: a mingling dataset with high-quality individual audio",description:"Recognizing voice activity from human speakers in a multimodal recording is a central task towards the understanding of the social interactions occurring within it. LaRed is an in-the-wild dataset for the study of voice activity from body movement. For ground truth, our dataset contains high-fidelity audio recordings from individual Lavalier microphones worn by subjects in the scene. The dataset also contains automatically-extracted pose tracks and chest-worn accelerometer readings, which provide an indication of overall body movement. We present three baselines for no-audio voice activity detection: a) voice activity detection from video, b) voice activity detection from body acceleration (chest-worn accelerometer), c) voice activity detection from our noisy pose tracks. The LaRed dataset provides the signals and ground truth necessary to evaluate a wide range of methods for voice activity detection from body movements.",paper:{title:"LaRed Dataset: no-audio speaking status detection in a crowded-setting",authors:"Jose Vargas-Quiros, Hayley Hung, and Laura Cabrera-Quiros",date:"2022"}}],P=()=>n.createElement(n.Fragment,null,D.map(((e,t)=>n.createElement(L,(0,T.Z)({key:t},e)))));var N=a(9722);const S=[{name:"linkedin",classname:"fab fa-linkedin fa-fw",link:"https://www.linkedin.com/in/josedvq/"},{name:"github",classname:"fab fa-github fa-fw",link:"https://github.com/josedvq"},{name:"instagram",classname:"fab fa-instagram fa-fw",link:"https://www.instagram.com/josedvq/"},{name:"mail",classname:"fa-solid fa-envelope",link:"mailto:josedvq@gmail.com"}],M=e=>{switch(e){case"linkedin":return"#0a66c2";case"github":return"purple";case"youtube":return"#c4302b";case"mail":return"brown";default:return"blue"}},R=()=>{const{isDarkTheme:e}=(0,w.I)();return n.createElement("div",null,S.map((t=>n.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",key:t.classname},n.createElement(N.Z,{className:t.classname,sx:{color:e?"white":"black",fontSize:30,marginTop:1,marginRight:1,"&:hover":{color:`${M(t.name)}`}}})))))}}}]);