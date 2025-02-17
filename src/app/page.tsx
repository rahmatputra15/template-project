import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="m-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            unde reiciendis a accusamus beatae adipisci. Sunt enim ut
            repellendus odio repudiandae harum accusantium asperiores aperiam
            autem, corrupti reiciendis! Nostrum neque non consequuntur beatae
            accusamus reiciendis facere quam ipsam odio aliquam ea dolores
            incidunt officiis, eius corrupti repudiandae possimus modi molestiae
            atque fugit ab explicabo eos. Soluta tempora amet harum cupiditate,
            natus totam dolore aliquam suscipit dolorum aliquid nisi accusamus
            architecto id quis earum corrupti expedita dicta, omnis nam,
            corporis tempore dolor? Iste totam aut expedita ex consectetur sit
            sunt autem officiis qui ipsam! Magnam praesentium quam iusto
            reprehenderit harum eveniet.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Send /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
