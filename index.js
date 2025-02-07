const testimonials = [
    {
        quote: "To become a cook has always been my dream since I was a child, and now I’m living that dream.",
        name: "Jozzy Carson",
        role: "Professional Chef",
        image: "assets/images/chef2.jpg"
    },
    {
        quote: "Cooking is an art, and I love creating masterpieces in the kitchen!",
        name: "Lisa Brown",
        role: "Head Chef",
        image: "assets/images/chef3.jpg"
    },
    {
        quote: "Food brings people together, and I enjoy being a part of that experience.",
        name: "Michael Lee",
        role: "Culinary Instructor",
        image: "assets/images/chef4.jpg"
    },
    {
        quote: "The art of cooking is not just in the ingredients, but in the love you put into it.",
        name: "Andre Silva",
        role: "Sous Chef",
        image: "assets/images/chef5.jpg"
    },
    {
        quote: "My culinary journey is fueled by passion and relentless curiosity, transforming simple ingredients into unforgettable experiences.",
        name: "Marcus Reed",
        role: "Head Chef",
        image: "assets/images/chef6.jpg"
    }
];

let currentIndex = 0;

function updateTestimonial(index) {
    document.getElementById("quote").textContent = testimonials[index].quote;
    document.querySelector(".chef-name").textContent = testimonials[index].name;
    document.querySelector(".chef-role").textContent = testimonials[index].role;
    document.querySelector(".card-img").style.backgroundImage = `url(${testimonials[index].image})`;
}

document.querySelector(".backward").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});

document.querySelector(".forward").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});

window.addEventListener("DOMContentLoaded", function() {
    updateTestimonial(currentIndex);
});