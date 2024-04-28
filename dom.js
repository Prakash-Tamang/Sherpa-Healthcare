// let drop_cont = document.getElementById("drop-cont");
// let isDrop = false;
// const drop = () => {
//   drop_cont.style.display = isDrop ? "none" : "block";
//   isDrop = !isDrop;
// };

const list = [
  {
    image: "./images/Frame 15 (3).png",
    title: "Community participation",
    desc: "The team works closely with participants to identify their goals and develop a plan to achieve them. We help participants navigate the NDIS system, access supports and services, and build their capacity to manage their plan. Support Coordination is an essential service for participants who require assistance to navigate the complex NDIS system.",
  },
  {
    image: "./images/Frame 15 (4).png",
    title: "Support Coordination",
    desc: "The team works closely with participants to identify their goals and develop a plan to achieve them. We help participants navigate the NDIS system, access supports and services, and build their capacity to manage their plan. Support Coordination is an essential service for participants who require assistance to navigate the complex NDIS system.",
  },
  {
    image: "./images/Frame 15 (5).png",
    title: "Plan Management",
    desc: "The team works closely with participants to identify their goals and develop a plan to achieve them. We help participants navigate the NDIS system, access supports and services, and build their capacity to manage their plan. Support Coordination is an essential service for participants who require assistance to navigate the complex NDIS system.",
  },
  {
    image: "./images/Frame 15 (3).png",
    title: "In-home Support",
    desc: "The team works closely with participants to identify their goals and develop a plan to achieve them. We help participants navigate the NDIS system, access supports and services, and build their capacity to manage their plan. Support Coordination is an essential service for participants who require assistance to navigate the complex NDIS system.",
  },
];

const card_wrapper = document.getElementById("card-list");
list.forEach((item) => {
  card_wrapper.innerHTML += `
    <div class="w-[420px] shrink-0">
<div class=" relative">
<img src="${item?.image}" alt="" class="w-full h-[320px] object-cover rounded-t-xl">
<span class="absolute right-[29px] -bottom-5">
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#01A9F0"/>
    <path d="M14 26L26 14M26 14H18M26 14V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>              
  </span>
</div>
<div class="flex flex-col gap-1 p-1">
    <h3 class="text-[15px] font-semibold text-[#0F110C]">${item?.title}</h3>
    <p class="text-[#0F110C] text-[13px] text-[#0F110C] line-clamp-2">
      ${item?.desc}
    </p>
</div>
</div>
 `;
});
