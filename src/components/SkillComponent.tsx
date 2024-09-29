export default function SkillComponent({ title, description }: { title: string, description: string }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-yellow-400">
          <h3 className="text-lg font-semibold text-yellow-400">{title}</h3>
          <p className="text-white mt-2">{description}</p>
      </div>
    );
}
