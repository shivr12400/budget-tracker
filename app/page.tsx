"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Progress } from './components/ui/progress';

export default function BudgetTracker() {
  const [categories, setCategories] = useState([
    { name: 'Housing', budget: 2000, spent: 0 },
    { name: 'Food', budget: 600, spent: 0 },
    { name: 'Transportation', budget: 400, spent: 0 },
    { name: 'Entertainment', budget: 200, spent: 0 },
    { name: 'Utilities', budget: 300, spent: 0 }
  ]);

  const [spendInputs, setSpendInputs] = useState({
    Housing: '',
    Food: '',
    Transportation: '',
    Entertainment: '',
    Utilities: ''
  });

  const handleSpend = (categoryName: string) => {
    const amount = parseFloat(spendInputs[categoryName as keyof typeof spendInputs]) || 0;
    if (amount <= 0) return;

    setCategories(categories.map(cat => {
      if (cat.name === categoryName) {
        return { ...cat, spent: cat.spent + amount };
      }
      return cat;
    }));

    setSpendInputs(prev => ({ ...prev, [categoryName]: '' }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Budget Tracker</h1>
        <div className="grid gap-6">
          {categories.map((category) => {
            const remaining = category.budget - category.spent;
            const percentageUsed = (category.spent / category.budget) * 100;
            
            return (
              <Card key={category.name} className="w-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Budget: ${category.budget}</span>
                      <span>Remaining: ${remaining.toFixed(2)}</span>
                    </div>
                    
                    <Progress 
                      value={percentageUsed} 
                      className="h-2"
                    />
                    
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={spendInputs[category.name as keyof typeof spendInputs]}
                        onChange={(e) => setSpendInputs(prev => ({
                          ...prev,
                          [category.name]: e.target.value
                        }))}
                        className="w-32"
                      />
                      <Button 
                        onClick={() => handleSpend(category.name)}
                        variant="outline"
                      >
                        Add Expense
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}