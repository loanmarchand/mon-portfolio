export default function ExperienceComponent({ title, date, description }: {
    title: string,
    date: string,
    description: string[]
}) {
    return (
      <div className="mb-6 border border-yellow-400 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
          <span className="text-gray-400">{date}</span>
          <ul className="list-disc list-inside text-white mt-2">
              {description.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
          </ul>
      </div>
    );
}
