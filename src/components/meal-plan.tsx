/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/seKRf9etDS7
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"; // Ensure the component is a Client Component

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import React from 'react';



export function MealPlan() {
  function generateJsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "Recipe",
      "name": "Weekly Meal Plan",
      "description": "A comprehensive meal plan for a week including a grocery list.",
      "recipeIngredient": [
        "2 lbs Chicken Breasts",
        "5 heads Broccoli",
        "2.5 cups Brown Rice",
        "14 count Eggs",
        "5 medium Sweet Potatoes",
        "1.5 lbs Spinach",
        "1.5 cups Quinoa",
        "1 tbsp Olive Oil",
        "2 cups Water",
        "1/2 cup Cherry Tomatoes",
        "1/4 cup Red Onion",
        "1 Avocado",
        "Salt and Pepper",
        "1 Lemon"
      ],
      "recipeInstructions": [
        {
          "@type": "HowToStep",
          "text": "Plan your meals for the week using the ingredients listed."
        },
        // ... (include all other steps)
      ],
      "image": "/weekly-meal-plan.jpg",
      "prepTime": "PT30M",
      "cookTime": "PT1H",
      "totalTime": "PT1H30M",
      "recipeYield": "7 meals",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "350",
        "carbohydrateContent": "45g",
        "proteinContent": "25g",
        "fatContent": "15g",
        "fiberContent": "10g",
        "sodiumContent": "150mg"
      },
      "suitableForDiet": "https://schema.org/LowFatDiet"
    };
  }
  useEffect(() => {
    // Load Instacart widget script
    // (function (d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) { return; }
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://widgets.instacart.com/widget-bundle-v2.js"; js.async = true;
    //   js.dataset.source_origin = "affiliate_hub"; fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "standard-instacart-widget-v1");

    // Add JSON-LD script for the grocery list schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(generateJsonLd());
    document.head.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <header className="bg-background shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="flex gap-4">
            <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="/recipes" className="text-lg font-medium hover:underline" prefetch={false}>
              Recipes
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
              Generate
            </Link>
            <Link href="/meal-plan" className="text-lg font-medium hover:underline" prefetch={false}>
              Meal Plans
            </Link>
            <Link href="/cookbook" className="text-lg font-medium hover:underline" prefetch={false}>
              Cookbook
            </Link>
          </nav>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 p-4 md:p-8">
        <div className="bg-background rounded-lg shadow-lg p-6 top-4">
          <h2 className="text-2xl font-bold mb-4">Grocery List</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Chicken Breasts</span>
              <div className="text-muted-foreground">
                <span>2 lbs</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Broccoli</span>
              <div className="text-muted-foreground">
                <span>5 heads</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Brown Rice</span>
              <div className="text-muted-foreground">
                <span>2.5 cups</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Eggs</span>
              <div className="text-muted-foreground">
                <span>14 count</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Sweet Potatoes</span>
              <div className="text-muted-foreground">
                <span>5 medium</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Spinach</span>
              <div className="text-muted-foreground">
                <span>1.5 lbs</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Quinoa</span>
              <div className="text-muted-foreground">
                <span>1.5 cups</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-muted-foreground">Total: $30.53</span>
          </div>
          <div className="flex justify-center mt-4">
          <div 
            id="shop-with-instacart-v1" 
            data-affiliate_id="4875" 
            data-source_origin="affiliate_hub" 
            data-affiliate_platform="recipe_widget"
            data-recipe-name="Weekly Meal Plan"
            data-recipe-ingredients="2 lbs Chicken Breasts, 5 heads Broccoli, 2.5 cups Brown Rice, 14 count Eggs, 5 medium Sweet Potatoes, 1.5 lbs Spinach, 1.5 cups Quinoa, 1 tbsp Olive Oil, 2 cups Water, 1/2 cup Cherry Tomatoes, 1/4 cup Red Onion, 1 Avocado, Salt and Pepper, 1 Lemon"
          ></div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/chicken_and_broccoli_recipe.jpeg"
              alt="Meal 1"
              width={400}
              height={300}
              className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Grilled Chicken and Broccoli</h3>
              <p className="text-muted-foreground mb-4">Grilled chicken breast, steamed broccoli, and brown rice.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Chicken Breasts</span>
                  <div className="text-muted-foreground">
                    <span>4 oz</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Broccoli</span>
                  <div className="text-muted-foreground">
                    <span>1 cup</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Brown Rice</span>
                  <div className="text-muted-foreground">
                    <span>1/2 cup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/baked sweet potato and scrambled eggs recipe.jpeg"
              alt="Meal 2"
              width={400}
              height={300}
              className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Baked Sweet Potato and Eggs</h3>
              <p className="text-muted-foreground mb-4">Baked sweet potato, scrambled eggs, and spinach.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Sweet Potato</span>
                  <div className="text-muted-foreground">
                    <span>1 medium</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Eggs</span>
                  <div className="text-muted-foreground">
                    <span>2</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Spinach</span>
                  <div className="text-muted-foreground">
                    <span>1/2 cup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/quinoa_veggie_bowl_recipe.jpeg"
              alt="Meal 3"
              width={400}
              height={300}
              className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Quinoa and Veggie Bowl</h3>
              <p className="text-muted-foreground mb-4">Quinoa, roasted broccoli, and sautéed spinach.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Quinoa</span>
                  <div className="text-muted-foreground">
                    <span>1/2 cup</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Broccoli</span>
                  <div className="text-muted-foreground">
                    <span>1 cup</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Spinach</span>
                  <div className="text-muted-foreground">
                    <span>1/2 cup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



