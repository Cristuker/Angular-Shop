import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
    selector: "app-product-delete",
    templateUrl: "./product-delete.component.html",
    styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
    product: Product;

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.productService.readById(id).subscribe((product) => {
            this.product = product;
        });
    }

    deleteProduct(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.productService.delete(id).subscribe(() => {
            this.productService.showMessage("Produto deletado com sucesso!");
            setTimeout(() => {
                this.router.navigate(["/products"]);
            }, 600);
        });
    }

    cancel(): void {
        this.router.navigate(["/products"]);
    }
}