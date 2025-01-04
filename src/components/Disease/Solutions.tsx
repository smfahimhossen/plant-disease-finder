import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Volume2 } from "lucide-react";

function Solutions() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <img
            src="https://www.bhg.com/thmb/eKaBYiwsn6aDSXZdOowZZB9_dng=/1245x0/filters:no_upscale():strip_icc()/tomato-moskovich-variety-d74d4cee-fc099413833045ddb5e2e52415a24d97.jpg"
            alt="Tomato"
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <div className="text-xl">Disease Analysis</div>
            <div className="text-sm text-muted-foreground">
              Recommended Solutions
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-2">
          <Volume2 className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-sm">
            Spots appear on leaves which gradually turn yellow. The spots may
            appear on stems and fruits as well.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Solutions</h3>
          <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
            <AccordionItem value="item-1">
              <AccordionTrigger>General Solutions</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Remove affected leaves</li>
                  <li>Maintain proper spacing between plants</li>
                  <li>Ensure good air circulation</li>
                  <li>Avoid overhead irrigation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Chemical Solutions</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNMUd4TzkSnk_FrmA508a4mk15S2iHG8mGg&s"
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium">Product Name</h4>
                      <p className="text-sm text-muted-foreground">200 gm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNMUd4TzkSnk_FrmA508a4mk15S2iHG8mGg&s"
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium">Solution 50% EC</h4>
                      <p className="text-sm text-muted-foreground">
                        1 gram per liter
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}

export default Solutions;
