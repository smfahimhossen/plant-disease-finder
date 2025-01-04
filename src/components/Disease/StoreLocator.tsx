import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { RefreshCw, Store } from "lucide-react";
import { Link } from "react-router";

interface Store {
  id: string;
  name: string;
  address: string;
}

const stores: Store[] = [
  {
    id: "1",
    name: "M/s. Mondol Traders",
    address: "Sasoli Bazar, Silpur, Patnitala, Naogaon",
  },
  {
    id: "2",
    name: "M/s. Razia Traders",
    address: "Belir More, Niamatpur, Naogaon",
  },
  {
    id: "3",
    name: "M/s. Mondol Traders",
    address: "Kalikattlir More, Pathakotha, Naogaon",
  },
  {
    id: "4",
    name: "M/s. Patli Mangal Krishi Enterprise",
    address: "Hasbari Road, Komorpur Chowmatha",
  },
  {
    id: "5",
    name: "M/s. Sadia Traders",
    address: "Nozipur Bus stand (Metali Road)",
  },
];

function StoreLocator() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Nearby Stores</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stores.map((store) => (
          <div
            key={store.id}
            className="flex items-start gap-4 p-4 rounded-lg border"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Store className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">{store.name}</h3>
              <p className="text-sm text-muted-foreground">{store.address}</p>
            </div>
          </div>
        ))}
        <Link to={"/upload"}>
          <Button className="w-full" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try another plant
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default StoreLocator;
