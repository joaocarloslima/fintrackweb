import { BarChartCategorias } from "@/components/BarChartCategorias";
import CardStats from "@/components/Card"
import { LineChartMovimentacoes } from "@/components/LineChartMovimentacoes";
import MovimentacaoTable from "@/components/MovimentacaoTable";
import { NavBar } from "@/components/NavBar"
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { BarChart } from "lucide-react";

export default function Home() {

  // criar um server action para buscar esses dados da API
  const maior = {
    icon: "arrow-up",
    title: "Maior movimentação",
    value: 99.00
  }

  const menor = {
    icon: "arrow-down",
    title: "Menor movimentação",
    value: 10.00
  }

  const ultimo = {
    icon: "calendar",
    title: "Última movimentação",
    value: 50.00
  }

  const totais = [
    maior,
    menor,
    ultimo
  ]

  // criar um server action para buscar esses dados da API (5 últimas movimentações)
  const ultimasMovimentacoes: Movimentacao[] = [
    {
      id: 1,
      data: "19/04/2024",
      descricao: "Compra no mercado",
      valor: 100.00,
      tipo: "SAIDA",
      categoria: {
        id: 1,
        nome: "Alimentação",
        icone: "utensils"
      }
    },
    {
      id: 2,
      data: "18/04/2024",
      descricao: "Compra de passagem",
      valor: 25.00,
      tipo: "SAIDA",
      categoria: {
        id: 2,
        nome: "Transporte",
        icone: "bus"
      }
    },
    {
      id: 3,
      data: "17/04/2024",
      descricao: "Compra de livro",
      valor: 50.00,
      tipo: "SAIDA",
      categoria: {
        id: 3,
        nome: "Educação",
        icone: "book"
      }
    },
    {
      id: 4,
      data: "16/04/2024",
      descricao: "Venda de livro",
      valor: 20.00,
      tipo: "ENTRADA",
      categoria: {
        id: 4,
        nome: "Venda",
        icone: "money"
      }
    },
    {
      id: 5,
      data: "15/04/2024",
      descricao: "Venda de livro",
      valor: 20.00,
      tipo: "ENTRADA",
      categoria: {
        id: 4,
        nome: "Venda",
        icone: "money"
      }
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <NavBar active="dashboard"/>
      <h2 className="text-2xl font-bold">Dashboard</h2>

       <section className="grid grid-flow-col-dense  gap-5">
        { totais.map( t => <CardStats {...t} /> ) }
      </section>

      <section className="flex gap-4">
        <Card>
          <CardHeader>
            <BarChart />
            <h3>Gastos por categoria</h3>
          </CardHeader>
          <CardBody>
            <BarChartCategorias />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <BarChart />
            <h3>Movimentações por mês</h3>
          </CardHeader>
          <CardBody>
            {/* <LineChartMovimentacoes /> */}
          </CardBody>
        </Card>
      </section>
      

      {/* <section>
        <h3 className="text-lg font-bold">Últimas movimentações</h3>
        <MovimentacaoTable data={ultimasMovimentacoes}  />
      </section> */}


    </main>
  );
}
