
import React from 'react'

export default function Aside(props) {
    const data = [
        {
            lang: 'en',
            heading: 'Hello world',
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            lang: 'fr',
            heading: 'Bonjour le monde',
            text: `Lorem Ipsum est simplement un texte factice de l'industrie de l'impression et de la composition.
            Lorem Ipsum est le texte factice standard de l'industrie depuis les années 1500, quand un imprimeur inconnu a pris un type de cuisine et l'a brouillé pour en faire un cahier de caractères.`
        },
        {
            lang: 'hi',
            heading: 'नमस्ते दुनिया',
            text: ` लोरम इप्सम केवल मुद्रण और टंकण उद्योग का डमी पाठ है। लोरम इप्सम 1500 के दशक से कभी भी उद्योग का मानक डमी पाठ रहा है,
            जब एक अज्ञात प्रिंटर ने एक प्रकार की गली ली और एक प्रकार की पुस्तक बनाने के लिए इसे तराशा।`
        },
        {
            lang: 'gj',
            heading: 'હેલો વર્લ્ડ',
            text: ` લoreરેમ ઇપ્સમ એ ફક્ત પ્રિન્ટિંગ અને ટાઇપસેટિંગ ઉદ્યોગનો ડમી ટેક્સ્ટ છે. લoreરેમ ઇપ્સમ 1500 ના દાયકાથી જ ઉદ્યોગનો માનક બનાવટી લખાણ રહ્યો છે, જ્યારે કોઈ અજાણ્યા પ્રિંટર પ્રકારનો ગેલ લગાવે છે અને ટાઇપ સેમ્પ્યુન બુક બનાવવા માટે તેને સ્ક્રેમ્બલ કરે છે.`
        },

    ]

    const showData = data.filter(text => text.lang === props.active);
    console.log(showData); 

    return (
        <div className="left-side-part">
            <h1 className="card-heading">{showData[0].heading}</h1>
            <p className="card-text">{showData[0].text}</p>
        </div>
    )
}
                            