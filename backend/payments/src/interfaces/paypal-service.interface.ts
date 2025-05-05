import { CaptureOrderRequestDto } from '../dtos/capture-order-request.dto';
import { CaptureOrderResponseDto } from '../dtos/capture-order-response.dto';
import { CreateOrderRequestDto } from '../dtos/create-order-request.dto';
import { CreateOrderResponseDto } from '../dtos/create-order-response.dto';

export interface IPaypalService {
  createOrder(orderData: CreateOrderRequestDto): Promise<CreateOrderResponseDto>;
  captureOrder(captureData: CaptureOrderRequestDto): Promise<CaptureOrderResponseDto>;
}
