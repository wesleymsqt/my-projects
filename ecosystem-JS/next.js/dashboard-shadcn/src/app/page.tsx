import { ChartOverview } from "@/components/chart/page";
import { Sales } from "@/components/sales/page";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSignIcon, DollarSign, Package, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de Vendas
              </CardTitle>
              <DollarSign className="ml-auto h-4 w-4" />
            </div>

            <CardDescription>
              Total vendas em 90 dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 40.000 </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto h-4 w-4" />
            </div>

            <CardDescription>
              Novos clientes em 90 dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold"> 234 </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos
              </CardTitle>
              <Package className="ml-auto h-4 w-4" />
            </div>

            <CardDescription>
              Novos pedidos em 90 dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold"> 234 </p>
            </CardContent>
          </CardHeader>
        </Card>

         <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Pedidos
              </CardTitle>
              <BadgeDollarSignIcon className="ml-auto h-4 w-4" />
            </div>

            <CardDescription>
              Total pedidos em 90 dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold"> 2300 </p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
