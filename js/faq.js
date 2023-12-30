const questionWithAnswer = [
    {
        id: 1,
        question: "How to place an order?",
        answer: "You can order on the official website or walk into our store to purchase products."
    },
    {
        id: 2,
        question: "What payment methods are available?",
        answer: "Payment can be made using e-wallet, debit or credit card, FPX Online, and BNPL (Buy now Pay Later)."
    },
    {
        id: 3,
        question: "How do I obtain invoices and receipts?",
        answer: "After purchasing the product, it will be sent to you via email."
    },
    {
        id: 4,
        question: "How long does delivery take?",
        answer: "It will take approximately 2 weeks from the time the order is successfully placed."
    },
    {
        id: 5,
        question: "How to track an order?",
        answer: "After successfully placing an order, click My Order to view the location of the order."
    },
    {
        id: 6,
        question: "How are returns and exchanges processed?",
        answer: "You can call the official customer service number to make an appointment and walk into the store for refund/exchange."
    },
    {
        id: 7,
        question: "How to participate in promotions?",
        answer: "During specific holidays, the store will hold event promotions, and some products will be automatically discounted."
    },
    {
        id: 8,
        question: "What is the customer service email address?",
        answer: "mcson123@gmail.com"
    },
    {
        id: 9,
        question: "Is there online chat support?",
        answer: "Yes, 10 am to 9 pm"
    },
    {
        id: 10,
        question: "Where can I find store addresses and opening hours?",
        answer: "TARUMT Jalan Genting Kelang, Setapak,53300 Kuala Lumpur,"
    }
]

addDataToHTML();
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});

function addDataToHTML() {
    let listFaqHTML = document.querySelector('.container');
    let faqBox = document.querySelector('.faq');

    if (questionWithAnswer != null) [
        questionWithAnswer.forEach(a => {
            let faqBox = document.createElement('div');
            faqBox.classList.add('faq');
            let newQuestion = document.createElement('div');
            newQuestion.classList.add('question');
            newQuestion.innerHTML = `
                <h3>${a.question}</h3>
                <img class="arrow" src="/icon/downArrow.png" alt="">
            `;
            let newAnswer = document.createElement('div');
            newAnswer.classList.add('answer');
            newAnswer.innerHTML = `
                <p>${a.answer}</p>
            `;
            listFaqHTML.appendChild(faqBox);
            faqBox.appendChild(newQuestion);
            faqBox.appendChild(newAnswer);
        })
    ]
}

function backAbout() {
    window.location.href = "about.html";
}
