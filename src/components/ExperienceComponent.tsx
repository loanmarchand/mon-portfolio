

export default function ExperienceComponent({title, date, description} : {title: string, date: string, description: string[]}) {
    return <div className="mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-gray-600">{date}</span>
        <ul className="list-disc list-inside">
        {description.map((element) => {
            return <li>{element}</li>;
        })}
        </ul>
    </div>;
}