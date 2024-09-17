export default function SkillComponent({title,description} : {title: string, description: string}) {
    return <div className="bg-gray-200 p-4 rounded">
        <h3 className="font-semibold">{title}</h3>
        <p>{description}</p>
    </div>;
}