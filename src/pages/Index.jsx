import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex-grow flex justify-center items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>My Application</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Enter something..." />
            <Button className="w-full">Submit</Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            This is a bare-bones application. Modify it as needed.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;