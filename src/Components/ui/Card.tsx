import React from "react";
import { cn } from "../../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-6 rounded-lg border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-2xl font-semibold leading-none tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

// Demo component showing the Card in action
export default function CardDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Card Component</h1>
          <p className="text-muted-foreground">
            Flexible card components for your timeline and UI needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Card */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>A simple card with header and content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is the content area of the card. You can put any content here.
              </p>
            </CardContent>
          </Card>

          {/* Card with Footer */}
          <Card>
            <CardHeader>
              <CardTitle>Card with Footer</CardTitle>
              <CardDescription>Includes header, content, and footer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card demonstrates all available sections including a footer.
              </p>
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Action
              </button>
            </CardFooter>
          </Card>

          {/* Timeline-style Card */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <span className="text-sm font-bold text-primary">2024</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Timeline Event</h3>
              <p className="text-sm text-muted-foreground mb-2 font-medium">
                Organization Name
              </p>
              <p className="text-sm text-muted-foreground">
                This card style matches the ScrollTimeline component design.
              </p>
            </CardContent>
          </Card>

          {/* Elevated Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>Enhanced shadow for prominence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card has an elevated appearance with stronger shadows.
              </p>
            </CardContent>
          </Card>

          {/* Outlined Card */}
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>Emphasized border with transparency</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Features a prominent border and subtle backdrop blur effect.
              </p>
            </CardContent>
          </Card>

          {/* Filled Card */}
          <Card className="bg-primary/10 border-primary/30">
            <CardHeader>
              <CardTitle>Filled Card</CardTitle>
              <CardDescription>Colored background variant</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Uses a tinted background to stand out from other cards.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Full Width Example */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Full Width Card Example</CardTitle>
            <CardDescription>
              This card spans the full width of its container
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Cards are highly flexible and can be customized with Tailwind classes.
                They work seamlessly with the ScrollTimeline component and can be styled
                to match your design system.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-md text-center">
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div className="p-4 bg-muted rounded-md text-center">
                  <p className="text-2xl font-bold">50K</p>
                  <p className="text-xs text-muted-foreground">Users</p>
                </div>
                <div className="p-4 bg-muted rounded-md text-center">
                  <p className="text-2xl font-bold">99%</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Learn More
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}