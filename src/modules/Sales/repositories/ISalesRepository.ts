export interface ISalesRepository {
  create(entity): Promise<void>;
  list(): Promise<void>;
}
