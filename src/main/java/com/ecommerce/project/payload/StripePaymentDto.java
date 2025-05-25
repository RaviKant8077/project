package com.ecommerce.project.payload;


import lombok.Data;

@Data
public class StripePaymentDto {


    private String currency;
    private Long amount;
}
