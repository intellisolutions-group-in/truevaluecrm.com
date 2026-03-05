'use client';

import { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { productCategories, type ProductCategory } from '../data/products';

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories: ProductCategory[] =
    activeCategory === 'all'
      ? productCategories
      : productCategories.filter((c) => c.id === activeCategory);

  return (
    <section
      id="products-ecosystem"
      className="bg-gradient-to-b from-background via-muted/10 to-background py-16 sm:py-24 scroll-mt-20"
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>Product Ecosystem</span>
          </div>
          <h2
            id="ecosystem-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
          >
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              run your business
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A comprehensive suite of business applications designed to work together seamlessly.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
            }`}
          >
            All Products
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Categories + Cards */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{category.name}</h3>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                  {category.products.length} products
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <div
                      key={product.id}
                      className="group relative flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`shrink-0 p-3 rounded-xl bg-primary/10 ${product.iconClass} group-hover:bg-primary/20 group-hover:scale-110 transition-all`}>
                          <Icon className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                            {product.name}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {product.description}
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
          >
            VIEW PRICING PLANS
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
