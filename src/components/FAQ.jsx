import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function FAQ() {

    const faqs = [
        {
            id: 1,
            question: "What is Lost Nest?",
            answer: "Lost Nest is a platform designed to help individuals locate and recover lost items. Whether you’ve lost personal belongings like phones, wallets, or keys, or found an item that belongs to someone else, Lost Nest connects people to reunite lost and found items.",
        },
        {
            id: 2,
            question: "How do I report a lost item on Lost Nest?",
            answer: "To report a lost item, simply create an account or log in to Lost Nest. Once logged in, navigate to the ‘Report Lost Item’ section, fill out the details of the lost item (description, date and place of loss, etc.), and submit it. Our team will then help you search for the item and connect you with finders.",
        },
        {
            id: 3,
            question: "How do I report a found item on Lost Nest?",
            answer: "If you've found an item, go to the ‘Report Found Item’ section on Lost Nest, fill out the required details (description, location where found, etc.), and submit the report. You can also upload a photo of the item to assist in identification. We’ll match your found item with lost items in our database.",
        },
        {
            id: 4,
            question: "How will I know if someone found my lost item?",
            answer: "You will receive a notification via email or through your Lost Nest account once a match is made between your lost item and a reported found item. We’ll provide you with the details of the finder to arrange the return of the item.",
        },
        {
            id: 5,
            question: "Can I contact the person who found my item directly?",
            answer: "Yes, once a match is made, Lost Nest will facilitate communication between you and the person who found your item. We prioritize your privacy, so any contact details will only be shared once both parties have agreed to communicate.",
        },
        {
            id: 6,
            question: "Is there a fee to use Lost Nest?",
            answer: "Lost Nest is free to use for both reporting lost items and reporting found items. However, there may be optional premium features or services available to enhance your experience.",
        },
        {
            id: 7,
            question: "How does Lost Nest ensure the security of my personal information?",
            answer: "We take your privacy seriously and ensure all personal information is securely stored and protected. Lost Nest uses industry-standard encryption to protect your data and offers two-factor authentication to further enhance security for your account.",
        },
        {
            id: 8,
            question: "What should I do if I’ve already found my lost item but haven’t updated the site?",
            answer: "If you have recovered your lost item, please update your report on Lost Nest as soon as possible to ensure others don't continue searching for it. This helps maintain an accurate and helpful database for all users.",
        },
        {
            id: 9,
            question: "How can I help Lost Nest improve?",
            answer: "You can help us by sharing your experience, leaving feedback, and referring others to Lost Nest. We are always looking for ways to improve our service and appreciate your suggestions.",
        },
        {
            id: 10,
            question: "What happens if I can’t find my lost item?",
            answer: "While Lost Nest helps connect people to recover lost items, not all items may be found. We suggest keeping your report active and updating it if any new information comes up. Additionally, you can set up notifications to get alerts when an item similar to yours is found.",
        },
    ];


    return (
        <Accordion type="single" id="faq" collapsible className="w-full sm:w-10/12 mx-auto">
            <div className="py-6 sm:py-12 px-4">
                {faqs.map(faq => (
                    <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                        <AccordionTrigger className="text-lg sm:text-2xl text-gray-200">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base sm:text-lg text-gray-400">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
        </Accordion>
    )
}

export default FAQ