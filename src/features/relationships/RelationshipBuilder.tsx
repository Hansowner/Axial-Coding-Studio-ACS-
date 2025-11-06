import { Button } from '../../ui/Button';
import { Sankey } from '../../ui/Sankey';

export function RelationshipBuilder() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Relationship Builder</h1>
      <p className="text-text-muted mb-4">
        Define when X then Y relationships between categories with evidence quotes.
      </p>
      <div className="mb-4">
        <Sankey nodes={[]} links={[]} />
      </div>
      <Button>Add Relationship</Button>
    </div>
  );
}
