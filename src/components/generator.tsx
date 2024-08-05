/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/2oWNWGjltKn
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Generator() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-3xl font-bold text-primary-foreground mb-2">5-Day Personalized Meal Plan</h1>
        <p className="text-muted-foreground text-lg">
          Enjoy a variety of breakfast, lunch, and dinner options tailored to your preferences.
        </p>
      </div>
      <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="servingSize">Serving Size</Label>
            <Select id="servingSize">
              <SelectTrigger>
                <SelectValue placeholder="Select serving size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 person</SelectItem>
                <SelectItem value="2">2 people</SelectItem>
                <SelectItem value="3">3 people</SelectItem>
                <SelectItem value="4">4 people</SelectItem>
                <SelectItem value="5">5 people</SelectItem>
                <SelectItem value="6">6 people</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="cuisine">Cuisine</Label>
            <Select id="cuisine">
              <SelectTrigger>
                <SelectValue placeholder="Select cuisine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="american">American</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="mexican">Mexican</SelectItem>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="mediterranean">Mediterranean</SelectItem>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
            <Textarea
              id="dietaryRestrictions"
              placeholder="Enter any dietary restrictions (e.g., gluten-free, dairy-free, etc.)"
            />
          </div>
        </form>
        <div className="flex justify-end mt-4">
          <Button>Generate Meal Plan</Button>
        </div>
      </div>
      <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">Grocery List</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-muted/20 rounded-md p-4">
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Avocado</li>
                <li>Eggs</li>
                <li>Whole grain bread</li>
                <li>Oats</li>
              </ul>
            </div>
            <div className="bg-muted/20 rounded-md p-4">
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Chia seeds</li>
                <li>Berries</li>
                <li>Chicken</li>
                <li>Quinoa</li>
              </ul>
            </div>
            <div className="bg-muted/20 rounded-md p-4">
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Greens</li>
                <li>Vegetables</li>
                <li>Salmon</li>
                <li>Lentils</li>
              </ul>
            </div>
            <div className="bg-muted/20 rounded-md p-4">
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Sweet potatoes</li>
                <li>Curry spices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 gap-6">
          <h2 className="text-2xl font-bold text-primary-foreground">Breakfast</h2>
          <Card className="bg-card shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Breakfast 1"
              width={400}
              height={300}
              className="rounded-t-lg object-cover w-full h-48"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Avocado Toast with Poached Eggs</h3>
              <p className="text-muted-foreground">
                A nutritious and satisfying breakfast featuring avocado, poached eggs, and whole grain toast.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <Button variant="outline">Save</Button>
              <Button>View Recipe</Button>
            </CardFooter>
          </Card>
          <Card className="bg-card shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Breakfast 2"
              width={400}
              height={300}
              className="rounded-t-lg object-cover w-full h-48"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Overnight Oats with Berries</h3>
              <p className="text-muted-foreground">
                A quick and easy breakfast option with oats, chia seeds, and fresh berries.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <Button variant="outline">Save</Button>
              <Button>View Recipe</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <h2 className="text-2xl font-bold text-primary-foreground">Lunch</h2>
          <Card className="bg-card shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Lunch 1"
              width={400}
              height={300}
              className="rounded-t-lg object-cover w-full h-48"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Grilled Chicken Salad with Quinoa</h3>
              <p className="text-muted-foreground">
                A fresh and filling lunch option with grilled chicken, quinoa, and a variety of greens and vegetables.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <Button variant="outline">Save</Button>
              <Button>View Recipe</Button>
            </CardFooter>
          </Card>
          <Card className="bg-card shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Lunch 2"
              width={400}
              height={300}
              className="rounded-t-lg object-cover w-full h-48"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Veggie Wrap with Hummus</h3>
              <p className="text-muted-foreground">
                A nutritious and satisfying lunch wrap with a variety of fresh vegetables and creamy hummus.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <Button variant="outline">Save</Button>
              <Button>View Recipe</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <h2 className="text-2xl font-bold text-primary-foreground">Dinner</h2>
          <Card className="bg-card shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Dinner 1"
              width={400}
              height={300}
              className="rounded-t-lg object-cover w-full h-48"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Baked Salmon with Roasted Vegetables</h3>
              <p className="text-muted-foreground">
                A delicious and nutritious dinner featuring baked salmon and a variety of roasted vegetables.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <Button variant="outline">Save</Button>
              <Button>View Recipe</Button>
            </CardFooter>
          </Card>
          <Card className="bg-card shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Dinner 2"
              width={400}
              height={300}
              className="rounded-t-lg object-cover w-full h-48"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Lentil and Sweet Potato Curry</h3>
              <p className="text-muted-foreground">
                A flavorful and comforting vegetarian curry dish with lentils and sweet potatoes.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <Button variant="outline">Save</Button>
              <Button>View Recipe</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}