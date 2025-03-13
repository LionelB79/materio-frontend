import  useLocalities  from '../hooks/useLocalities';


  export default function LocalityList() {
  
  const { localities, loading, error } = useLocalities();

  if (loading) return <div>Chargement des localités...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Liste des Localités</h2>
      {localities.length === 0 ? (
        <p>Aucune localité trouvée.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {localities.map((locality) => (
            <div 
              key={locality.name}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold">{locality.name}</h3>
              <p>{locality.address}</p>
              <p>{locality.cp} {locality.city}</p>
              <p>{locality.spaces.length} espace(s)</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

